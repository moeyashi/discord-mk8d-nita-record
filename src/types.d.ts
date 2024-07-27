import type {
  CacheType,
  ChatInputCommandInteraction,
  ClientEvents,
  GuildMember,
  SlashCommandBuilder,
  SlashCommandOptionsOnlyBuilder,
} from 'discord.js';

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export type EventType = keyof ClientEvents;

type InsertNitaParameters = Nita;
type UpdateNitaParameters = Nita;

export type NitaRepository = {
  insertNita: (params: InsertNitaParameters) => Promise<void>;
  updateNita: (params: UpdateNitaParameters) => Promise<void>;
  deleteNita: (discordUserId: string, trackCode: string) => Promise<void>;
  deleteAllNita: (discordUserId: string) => Promise<void>;
  selectNitaByUserAndTrack: (discordUserId: string, trackCode: string) => Promise<Nita | null>;
  selectNitaByUser: (discordUserId: string) => Promise<Nita[]>;
  selectRanking: (
    trackCode: string,
    discordMembers: GuildMember[],
    limit?: number,
    offset?: number,
  ) => Promise<{ member: GuildMember; milliseconds: number }[]>;
  selectRankByUser: (trackCode: string, discordUserId: string, discordMembers: GuildMember[]) => Promise<number | null>;
  countExistsNita: (trackCode: string, discordMembers: GuildMember[]) => Promise<number>;
  selectRival: (
    executorDiscordId: string,
    rivalDiscordId: string,
  ) => Promise<
    {
      trackCode: string;
      executorMilliseconds: number;
      rivalMilliseconds: number;
    }[]
  >;
};

// 参考 https://typescriptbook.jp/reference/functions/overload-functions#%E3%82%A2%E3%83%AD%E3%83%BC%E9%96%A2%E6%95%B0%E3%81%A8%E3%82%AA%E3%83%BC%E3%83%90%E3%83%BC%E3%83%AD%E3%83%BC%E3%83%89
export type Event<EventName extends EventType> = {
  name: EventName;
  once?: boolean;
  execute: (nitaRepository: NitaRepository, ...args: ClientEvents[EventName]) => void;
};

export type SlashCommand = {
  data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder;
  execute: (interaction: ChatInputCommandInteraction<CacheType>, nitaRepository: NitaRepository) => Promise<void>;
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
   * VSカスタムでのNITAのWRのURL
   */
  nitaVSWRUrl: string;
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
