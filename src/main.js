// @ts-check
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import { postgresNitaRepository } from './infra/repository/nita.js';
import { postgresWorldNitaRepository } from './infra/repository/world-nita-repository.js';
import { makePostgresConnection } from './lib.js';

dotenv.config();

const sql = makePostgresConnection();

const nitaRepository = postgresNitaRepository(sql);
const worldNitaRepository = postgresWorldNitaRepository(sql);

const repositories = {
  nitaRepository,
  worldRepository: worldNitaRepository,
};

const main = async () => {
  // Create a new client instance
  const client = new Client({ intents: [GatewayIntentBits.GuildMembers] });

  // Handle Events
  console.info('Loading events...');
  const eventsPath = join('src', 'event');
  const eventFiles = (await readdir(eventsPath)).filter((file) => file.endsWith('.js'));
  for (const file of eventFiles) {
    const filePath = join(eventsPath, file);
    const module = await import(`../${filePath}`);
    /** @type {import('./types').Event<import('./types').EventType>} */
    const event = module.default;
    console.info(event);
    if (!(event.name && event.execute)) {
      console.warn(`[WARNING] The event at ${filePath} is missing a required "name" and "execute" property.`);
      continue;
    }
    if (event.once) {
      client.once(event.name, (...args) => event.execute(repositories, ...args));
    } else {
      client.on(event.name, (...args) => event.execute(repositories, ...args));
    }
  }
  console.info('Loaded events!');

  try {
    // Log in to Discord with your client's token
    await client.login(process.env.DISCORD_BOT_TOKEN);
    console.info('Logged in to Discord!');
  } catch (error) {
    console.error(`Failed to log in to Discord. ${error}`);
  }
};

main();
