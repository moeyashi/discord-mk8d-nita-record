import type {
  CacheType,
  ChatInputCommandInteraction,
  ClientEvents,
  SlashCommandBuilder,
} from "discord.js";

export type EventType = keyof ClientEvents;

// 参考 https://typescriptbook.jp/reference/functions/overload-functions#%E3%82%A2%E3%83%AD%E3%83%BC%E9%96%A2%E6%95%B0%E3%81%A8%E3%82%AA%E3%83%BC%E3%83%90%E3%83%BC%E3%83%AD%E3%83%BC%E3%83%89
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

export type Track = {
  /**
   * コース名
   */
  trackName: string;
  /**
   * ラウンジサーバーの絵文字から参照したコースの省略名
   *
   * @example "rWS" ワリオスタジアム
   */
  code: string;
  /**
   * VSカスタムでのNITAのWR
   */
  nitaVSWRMilliseconds: number;
  /**
   * AllカスタムでのNITAのWR
   */
  nitaAllCombinationWRMilliseconds: number;
  /**
   * コースの別名
   */
  aliases: string[];
};

export type Nita = {
  trackCode: string;
  discordUserId: string;
  milliseconds: number;
  lastMilliseconds?: number;
};
