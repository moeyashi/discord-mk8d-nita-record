// @ts-check
import { readFile } from 'fs/promises';
import { REST, Routes } from 'discord.js';
import { loadCommands } from './util/load-commands.js';

const main = async () => {
  const commands = await loadCommands();
  const { clientId, guildId, token } = JSON.parse(await readFile('config.json', { encoding: 'utf-8' }));
  // Construct and prepare an instance of the REST module
  const rest = new REST().setToken(token);

  // and deploy your commands!
  try {
    console.log(`Started refreshing ${commands.size} application (/) commands.`);

    // The put method is used to fully refresh all commands in the guild with the current set
    /** @type {import('discord.js').RESTPutAPIApplicationGuildCommandsResult} */
    // @ts-ignore
    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: Array.from(commands.values()).map(command => command.data.toJSON()) },
    );

    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
};

main();
