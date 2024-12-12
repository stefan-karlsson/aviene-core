import { defineProject } from 'vitest/config';

export const baseProjectConfig = defineProject({
  test: {
    globals: true,
    restoreMocks: true,
  },
});
