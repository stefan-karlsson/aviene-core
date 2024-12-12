import { defineProject } from 'vitest/config';
import { baseProjectConfig } from './base.project.js';

export const unitTestProject = defineProject({
  ...baseProjectConfig,
  test: {
    ...baseProjectConfig.test,
    include: ['**/*.unit.ts'],
  },
});
