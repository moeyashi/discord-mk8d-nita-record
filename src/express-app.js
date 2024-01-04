// @ts-check
import { verifyKeyMiddleware } from 'discord-interactions';
import express from 'express';
import { InteractionResponseType, InteractionType } from 'discord-api-types/v10';
import { loadCommands } from './util/load-commands.js';

const commands = await loadCommands();

const app = express();

app.post('/interactions', verifyKeyMiddleware(process.env.DISCORD_BOT_CLIENT_PUBLIC_KEY || ''), async (req, res) => {
  /** @type {import('discord-api-types/v10').APIInteraction} */
  const interaction = req.body;
  if (interaction.type === InteractionType.ApplicationCommand) {
    const commandName = interaction.data.name;
    const command = commands.get(commandName);
    if (command) {
      try {
        res.send(await command.execute(interaction));
      } catch (e) {
        console.error(e);
        res.send({ type: InteractionResponseType.ChannelMessageWithSource, data: { content: `エラーが発生しました${e}` } });
      }
    } else {
      res.status(404).end();
    }
  } else if (interaction.type === InteractionType.Ping) {
    res.send({
      type: InteractionResponseType.Pong,
    });
  }
});

const port = process.env.PORT || 3001;
const server = app.listen(port);

// https://github.com/render-examples/express-hello-world/blob/main/app.js
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
