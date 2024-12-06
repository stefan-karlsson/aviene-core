import { defineConfig } from 'vitest/config';

export const baseConfig = defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src'],
      reporter: ['text', 'html'],
      reportsDirectory: './reports/unit/coverage',
    },
  },
});
