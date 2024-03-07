# DISCORD MK8DX NITA RECORD

## serve interaction webhook

1. `npm install`
2. `npm run start`

## deploy commands

1. `npm install`
2. config.jsonを作成
3. `npm run deploy`

## migrate database

1. `atlas schema apply --url "YOUR DB URL" --file schema.hcl`
  PlanetScaleの場合は`mysql://user:password@host/dbname?tls=true`
  Fly.ioのPostgresの場合は`flyctl proxy 5432 -a [postgres app name]`を実行してから`postgres://user:password@host?sslmode=disable`

## deploy bot

1. fly.tomlのappを変更
2. `flyctl deploy`

## BOTを支える技術

- [discord](https://discord.com/) Membersを使うので`SERVER MEMBERS INTENT`をONにすること。
- [Atlas](https://atlasgo.io/) DBのマイグレーションに使っています。
- [Fly.io](https://fly.io/) BOT・Postgresのホスティングに使っています。
