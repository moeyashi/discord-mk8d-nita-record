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

## deploy bot

1. fly.tomlのappを変更
2. `flyctl deploy`

## BOTを支える技術

- [discord](https://discord.com/) Membersを使うので`SERVER MEMBERS INTENT`をONにすること。
- [Atlas](https://atlasgo.io/) DBのマイグレーションに使っています。
- [PlanetScale](https://planetscale.com/) MySQLのホスティングに使っています。
- [Fly.io](https://fly.io/) BOTのホスティングに使っています。
