table "nita" {
  schema = schema.nita
  column "track_code" {
    null = false
    type = varchar(5)
  }
  column "discord_user_id" {
    null = false
    type = varchar(32)
  }
  column "milliseconds" {
    null     = true
    type     = mediumint
    unsigned = true
  }
  primary_key {
    columns = [column.track_code, column.discord_user_id]
  }
  index "index_nita_track_code_discord_user_id" {
    columns = [column.track_code, column.discord_user_id]
  }
}
schema "nita" {
  charset = "utf8mb4"
  collate = "utf8mb4_0900_ai_ci"
}
