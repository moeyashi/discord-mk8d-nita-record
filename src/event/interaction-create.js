// @ts-check
import { Events } from 'discord.js';
import { loadCommands } from '../util/load-commands.js';

let cachedCommands = false;
/** @type {import('discord.js').Collection<string, import('../types').SlashCommand>} */
let _commands;

const getCommands = async () => {
  if (cachedCommands) {
    return _commands;
  }
  _commands = await loadCommands();
  cachedCommands = true;
  return _commands;
};

/** @type { import('../types').Event<Events.InteractionCreate> } */
export default {
  name: Events.InteractionCreate,
  async execute(repositories, interaction) {
    console.info('InteractionCreate event triggered!');
    if (!interaction.isChatInputCommand()) {
      console.info(`InteractionCreate: not a chat input command (type: ${interaction.type})`);
      return;
    }

    console.info(`InteractionCreate: command=${interaction.commandName}`);

    try {
      const commands = await getCommands();
      const command = commands.get(interaction.commandName);

      if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
      }

      console.info(`InteractionCreate: executing command=${interaction.commandName}`);
      await command.execute(interaction, repositories);
      console.info(`InteractionCreate: command=${interaction.commandName} executed successfully`);
    } catch (error) {
      console.error(`InteractionCreate: command=${interaction.commandName} threw an error:`, error);
      try {
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({
            content: `エラーが発生しました。${error}`,
            ephemeral: true,
          });
        } else {
          await interaction.reply({
            content: `エラーが発生しました。${error}`,
            ephemeral: true,
          });
        }
      } catch (e) {
        console.error('Failed to send error message:', e);
        return;
      }
    }
  },
};
