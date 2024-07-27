// @ts-check
import { Events } from 'discord.js';

/** @type { import('../types').Event<Events.ClientReady> } */
export default {
  name: Events.ClientReady,
  once: true,
  execute: (_, client) => {
    if (!client.isReady()) {
      console.error('The client is not ready!');
      return;
    }
    console.info(`Ready! Logged in as ${client.user.tag}`);
  },
};
