// @ts-check
import { join } from 'path';
import { Collection } from 'discord.js';
import { readdir } from 'fs/promises';

export const loadCommands = async () => {
  /** @type {Collection<string, import('../types').SlashCommand>} */
  const commands = new Collection();
  console.info('Loading commands...');
  const foldersPath = join('src', 'slash-command');
  const commandFiles = (await readdir(foldersPath)).filter((file) => file.endsWith('.js'));
  for (const file of commandFiles) {
    const filePath = join(foldersPath, file);
    const module = await import('../../' + filePath);
    /** @type {import('../types').SlashCommand}*/
    const command = module.default;
    // console.log(command);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
      commands.set(command.data.name, command);
    } else {
      console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
  }
  console.info('Loaded commands!');
  return commands;
};
