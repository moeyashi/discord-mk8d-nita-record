import { getByCode } from '../const/track.js';
import { discordInteractionFollowupRepository } from '../infra/repository/discord-interaction-followup.js';
import { discordMembersRepository } from '../infra/repository/discord-members.js';
import { planetScaleRepository } from '../infra/repository/planetscale.js';
import { ceilDiff, displayMilliseconds } from '../util/time.js';

export const rankingController = async (req, res) => {
  console.info('[INFO] POST /deffereds/ranking');
  // 試しに5秒待つ
  await new Promise(resolve => setTimeout(resolve, 5000));
  const { guildId, applicationId, interactionToken, trackCode } = req.body;
  try {
    if (!(guildId && applicationId && interactionToken && trackCode)) {
      throw new Error(`guild_id, application_id, interaction_token, track_code is empty: ${guildId}, ${applicationId}, ${interactionToken}, ${trackCode}`);
    }
    const track = getByCode(trackCode);
    const discordMembersRepo = await discordMembersRepository();
    const serverMembers = await discordMembersRepo.selectByGuildId(guildId);

    const planetScaleRepo = planetScaleRepository();

    const ranking = await planetScaleRepo.selectRanking(track.code, serverMembers);

    /** @type {import('discord-api-types/v10').APIEmbed[]} */
    const embeds = [];

    const discordInteractionFollowupRepo = await discordInteractionFollowupRepository();
    await discordInteractionFollowupRepo.followup(applicationId, interactionToken, {
      embeds: ranking.reduce((pv, cv, i) => {
        if (i % 25 === 0) {
          pv.push({
            title: `${track.trackName}のNITAランキング`,
            fields: [],
          });
        }
        pv[pv.length - 1].fields?.push({
          name: cv.member.nick || cv.member.user?.username || 'unknown',
          value: `${displayMilliseconds(cv.milliseconds)} ${ceilDiff(track.nitaVSWRMilliseconds, cv.milliseconds)}落ち`,
        });
        return pv;
      }, embeds),
    });
  } catch (e) {
    console.error(e);
    const discordInteractionFollowupRepo = await discordInteractionFollowupRepository();
    await discordInteractionFollowupRepo.followup(applicationId, interactionToken, { content: `エラーが発生しました: ${e}` });
  }
  res.send('ok');
};
