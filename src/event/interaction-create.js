// @ts-check
import { Events } from 'discord.js';
import { loadCommands } from '../util/load-commands.js';

let cachedCommands = false;
/** @type {import('discord.js').Collection<string, import('../types').SlashCommand>} */
let _commands;

const getCommands = async () => {
  if (cachedCommands) return _commands;
  _commands = await loadCommands();
  cachedCommands = true;
  return _commands;
};

/** @type { import('../types').Event<Events.InteractionCreate> } */
export default {
  name: Events.InteractionCreate,
  async execute(nitaRepository, interaction) {
    console.info('InteractionCreate event triggered!');
    if (!interaction.isChatInputCommand()) return;

    const commands = await getCommands();
    // console.log(commands);
    const command = commands.get(interaction.commandName);

    if (!command) {
      console.error(`No command matching ${interaction.commandName} was found.`);
      return;
    }

    try {
      await command.execute(interaction, nitaRepository);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: `エラーが発生しました。${error}`, ephemeral: true });
      } else {
        await interaction.reply({ content: `エラーが発生しました。${error}`, ephemeral: true });
      }
    }
  },
};
