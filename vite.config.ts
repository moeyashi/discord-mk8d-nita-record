import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    env: {
      DATABASE_HOST: 'localhost',
      DATABASE_PORT: '25432',
      DATABASE_USERNAME: 'postgres',
      DATABASE_PASSWORD: 'postgres',
    },
  },
});
