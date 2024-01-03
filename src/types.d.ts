import type {
  CacheType,
  ChatInputCommandInteraction,
  ClientEvents,
  Events,
  SlashCommandBuilder,
} from "discord.js";

export type EventType = keyof ClientEvents;

export type Event<EventName extends EventType> = {
  name: EventName;
  once?: boolean;
  execute: (...args: ClientEvents[EventName]) => void;
};

export type SlashCommand = {
  data:
    | SlashCommandBuilder
    | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
  execute: (
    interaction: ChatInputCommandInteraction<CacheType>
  ) => Promise<void>;
};

export type Nita = {
  trackCode: string;
  discordUserId: string;
  milliseconds: number;
};
