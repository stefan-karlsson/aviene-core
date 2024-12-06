import { defineProject } from 'vitest/config';
import { baseConfig } from './base.config.js';

export const integrationTestProject = defineProject({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    globals: true,
    restoreMocks: true,
    include: ['./**/*.integration.ts'],
  },
});
