// @ts-check
import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
import { loadCommands } from './util/load-commands.js';

dotenv.config();

const main = async () => {
  const commands = await loadCommands();
  const clientId = process.env.DISCORD_BOT_CLIENT_ID || '';
  const guildId = process.env.DISCORD_BOT_GUILD_ID || '';
  const token = process.env.DISCORD_BOT_TOKEN || '';
  // Construct and prepare an instance of the REST module
  const rest = new REST().setToken(token);

  // and deploy your commands!
  try {
    console.info(`Started refreshing ${commands.size} application (/) commands.`);

    // The put method is used to fully refresh all commands in the guild with the current set
    /**
     * @type {import('discord.js').RESTPutAPIApplicationGuildCommandsResult | import('discord.js').RESTPutAPIApplicationCommandsResult}
     */
    // @ts-ignore
    const data = await rest.put(
      guildId ? Routes.applicationGuildCommands(clientId, guildId) : Routes.applicationCommands(clientId),
      {
        body: Array.from(commands.values()).map((command) => command.data.toJSON()),
      },
    );

    console.info(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
};

main();
