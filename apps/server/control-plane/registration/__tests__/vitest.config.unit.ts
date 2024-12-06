import defaultConfig from '@aviene/vitest';
import { defineConfig, mergeConfig } from 'vitest/config';

export default mergeConfig(
  defaultConfig,
  defineConfig({
    test: {
      include: ['./unit/**/*.unit.ts'],
    },
  }),
);
