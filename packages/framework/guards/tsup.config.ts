import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    clean: true,
    entry: { index: './src/index.ts' },
    format: ['esm'],
    target: 'es2022',
    sourcemap: true,
    treeshake: true,
    tsconfig: 'tsconfig.build.json',
    env: {
      // Always production, see: https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production#node_env-in-express
      NODE_ENV: 'production',
    },
  };
});