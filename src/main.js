// @ts-check
import dotenv from 'dotenv';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { Client, GatewayIntentBits } from 'discord.js';
import { postgresNitaRepository } from './infra/repository/nita.js';

dotenv.config();

const nitaRepository = postgresNitaRepository();

const main = async () => {
  // Create a new client instance
  const client = new Client({ intents: [GatewayIntentBits.GuildMembers] });

  // Handle Events
  console.info('Loading events...');
  const eventsPath = join('src', 'event');
  const eventFiles = (await readdir(eventsPath)).filter(file => file.endsWith('.js'));
  for (const file of eventFiles) {
    const filePath = join(eventsPath, file);
    const module = await import('../' + filePath);
    /** @type {import('./types').Event<import('./types').EventType>} */
    const event = module.default;
    console.log(event);
    if (!(event.name && event.execute)) {
      console.log(`[WARNING] The event at ${filePath} is missing a required "name" and "execute" property.`);
      continue;
    }
    if (event.once) {
      client.once(event.name, (...args) => event.execute(nitaRepository, ...args));
    } else {
      client.on(event.name, (...args) => event.execute(nitaRepository, ...args));
    }
  }
  console.info('Loaded events!');

  // Log in to Discord with your client's token
  await client.login(process.env.DISCORD_BOT_TOKEN);
};

main();
