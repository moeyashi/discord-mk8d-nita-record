table "nita" {
  schema = schema.public
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
    type     = integer
  }
  column "last_milliseconds" {
    null     = true
    type     = integer
  }
  primary_key {
    columns = [column.discord_user_id, column.track_code]
  }
}
schema "public" {
}
schema "repmgr" {
}
