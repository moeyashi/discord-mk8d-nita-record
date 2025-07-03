# DISCORD MK8DX NITA RECORD

## serve interaction webhook

1. `npm install`
2. `npm run start`

## deploy commands

1. `npm install`
2. `npm run deploy:commands`

## migrate database

1. `atlas schema apply --url "YOUR DB URL" --file schema.hcl`
   PlanetScale の場合は`mysql://user:password@host/dbname?tls=true`
   Fly.io の Postgres の場合は`flyctl proxy 5432 -a [postgres app name]`を実行してから`postgres://user:password@host?sslmode=disable`

## deploy bot

1. fly.toml の app を変更
2. `flyctl deploy`

## BOT を支える技術

- [discord](https://discord.com/) Members を使うので`SERVER MEMBERS INTENT`を ON にすること。
- [Atlas](https://atlasgo.io/) DB のマイグレーションに使っています。
- [Fly.io](https://fly.io/) BOT・Postgres のホスティングに使っています。
