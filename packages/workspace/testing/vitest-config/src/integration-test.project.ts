import { defineProject } from 'vitest/config';
import { baseProjectConfig } from './base.project.js';

export const integrationTestProjectConfig = defineProject({
  ...baseProjectConfig,
  test: {
    ...baseProjectConfig.test,
    include: ['**/*.integration.ts'],
  },
});
