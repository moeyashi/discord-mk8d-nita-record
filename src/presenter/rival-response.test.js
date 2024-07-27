import { describe, expect, it, test } from "vitest";
import { BLUE, RED } from "../const/color";
import { rivalResponse } from "./rival-response";

describe(rivalResponse, () => {
  const userHasUsername = {
    username: "test username",
    globalName: "test globalname",
  };
  const userHasGlobalName = { username: "", globalName: "test globalname" };
  test("usernameが空の場合globalNameが表示される", () => {
    const actual = rivalResponse(userHasGlobalName, []);
    expect(actual).toEqual({
      content: "VS test globalname\n\n記録がありません",
    });
  });
  describe("rivalListが空の場合", () => {
    const actual = rivalResponse(userHasUsername, []);
    test("0件メッセージが返却されること", () => {
      expect(actual).toEqual({
        content: "VS test username\n\n記録がありません",
      });
    });
  });
  describe("rivalListが空でない場合", () => {
    describe("コースのembedが作成される", () => {
      it("1コースのembedが作成される", () => {
        const actual = rivalResponse(userHasUsername, [
          {
            trackCode: "MKS",
            executorMilliseconds: 1000,
            rivalMilliseconds: 1001,
          },
        ]);
        expect(actual).toEqual({
          content: "VS test username",
          embeds: [
            {
              title: "勝ち",
              fields: [
                {
                  name: "マリオカートスタジアム",
                  value: "**0.001秒** (0:01.000 VS 0:01.001)",
                },
              ],
              color: BLUE,
            },
          ],
        });
      });
    });
    describe("25コース毎にembedが作成される", () => {
      it("26コースすべて勝利している場合、25コースのembedと1コースのembedが作成される", () => {
        const actual = rivalResponse(
          userHasUsername,
          Array.from({ length: 26 }).map((_, i) => ({
            trackCode: `track ${i}`,
            executorMilliseconds: 1000,
            rivalMilliseconds: 1001,
          })),
        );
        expect(actual.embeds).toHaveLength(2);
        expect(actual.embeds[0].fields).toHaveLength(25);
        expect(actual.embeds[1].fields).toHaveLength(1);
      });
    });
    describe("勝ち負けのembedが作成される", () => {
      it("4コース中2コース勝利2コース敗北の場合、2つの2コースのembedが作成される", () => {
        const actual = rivalResponse(userHasUsername, [
          {
            trackCode: "track 1",
            executorMilliseconds: 1000,
            rivalMilliseconds: 1002,
          },
          {
            trackCode: "track 2",
            executorMilliseconds: 1000,
            rivalMilliseconds: 1001,
          },
          {
            trackCode: "track 3",
            executorMilliseconds: 1000,
            rivalMilliseconds: 999,
          },
          {
            trackCode: "track 4",
            executorMilliseconds: 1000,
            rivalMilliseconds: 998,
          },
        ]);
        expect(actual.embeds).toHaveLength(2);
        expect(actual.embeds[0].fields).toHaveLength(2);
        expect(actual.embeds[0].title).toEqual("勝ち");
        expect(actual.embeds[0].color).toEqual(BLUE);
        expect(actual.embeds[1].fields).toHaveLength(2);
        expect(actual.embeds[1].title).toEqual("負け");
        expect(actual.embeds[1].color).toEqual(RED);
      });
    });
  });
});
