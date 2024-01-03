# DISCORD MK8DX NITA RECORD

公開していないのでサーバー管理者にホスティングしてもらうこと。

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
