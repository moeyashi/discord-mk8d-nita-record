// @ts-check
import { Events } from 'discord.js';

/** @type { import('../types').Event<Events.ClientReady> } */
export default {
  name: Events.ClientReady,
  once: true,
  execute: (_, client) => {
    if (!client.isReady()) return;
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};
