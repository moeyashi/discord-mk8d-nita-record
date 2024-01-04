import {
  APIApplicationCommandInteraction,
  APIInteractionResponse,
} from "discord-api-types/v10";
import type { SlashCommandBuilder } from "discord.js";

type SlashCommandExecute = {
  (
    interaction: APIApplicationCommandInteraction
  ): Promise<APIInteractionResponse>;
};

export type SlashCommand = {
  data:
    | SlashCommandBuilder
    | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
  execute: SlashCommandExecute;
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
   * コースの別名
   */
  aliases: string[];
};

export type Nita = {
  trackCode: string;
  discordUserId: string;
  milliseconds: number;
};
