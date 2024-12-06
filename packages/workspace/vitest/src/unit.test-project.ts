import { defineProject } from 'vitest/config';
import { baseConfig } from './base.config.js';

export const unitTestProject = defineProject({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    globals: true,
    restoreMocks: true,
    include: ['./**/*.unit.ts'],
  },
});
