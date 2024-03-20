import dotenv from 'dotenv';
import { REST, Routes } from 'discord.js';
dotenv.config();

const main = async () => {
  const token = process.env.DISCORD_BOT_TOKEN || '';
  const excludeGuildIds = process.env.EXCLUDE_GUILD_IDS?.split(',') || [];
  const rest = new REST().setToken(token);

  // 250 guilds あるので 100 ずつ 3 回に分けて取得する
  let after = null;
  for (let i = 0; i < 3; i++) {
    /** @type {import('discord.js').RESTGetAPICurrentUserGuildsQuery} */
    const userGuildsQuery = {
      limit: 100,
      with_counts: true,
    };
    if (after) {
      userGuildsQuery.after = after;
    }
    /** @type {import('discord.js').RESTGetAPICurrentUserGuildsResult} */
    const guilds = await rest.get(Routes.userGuilds(), { query: new URLSearchParams(userGuildsQuery) });
    for (const guild of guilds) {
      console.log(guild.id, guild.name, guild.approximate_member_count, '\n');
      if (excludeGuildIds.includes(guild.id)) {
        continue;
      }
      if (guild.approximate_member_count > 40) {
        continue;
      }
      /** @type {import('discord.js').RESTGetAPIGuildMembersQuery} */
      const guildMembersQuery = {
        limit: 40,
      };
      /** @type {import('discord.js').RESTGetAPIGuildMembersResult} */
      const members = await rest.get(Routes.guildMembers(guild.id), { query: new URLSearchParams(guildMembersQuery) });
      if (members.filter(member => !member.user?.bot).length < 5) {
        console.log('Leaving guild\n');
        await rest.delete(Routes.userGuild(guild.id));
      }
    }
    after = guilds[guilds.length - 1].id;
  }
};

main().then(() => {
  console.log('Exited successfully.');
}).catch((error) => {
  console.error('Error while exiting:', error);
  process.exit(1);
});
