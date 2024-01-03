// @ts-check
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import { Client, GatewayIntentBits } from 'discord.js';

const main = async () => {
  // Create a new client instance
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

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
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
  console.info('Loaded events!');

  // Log in to Discord with your client's token
  const { token } = JSON.parse(await readFile('config.json', { encoding: 'utf-8' }));
  await client.login(token);
};

main();
