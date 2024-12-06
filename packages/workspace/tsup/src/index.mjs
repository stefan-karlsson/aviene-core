import { defineConfig } from 'tsup';

export const defaultConfig = defineConfig((options) => {
  return {
    clean: true,
    minify: !options.watch,
    entry: { index: './src/index.ts' },
    format: ['esm'],
    outExtension(ctx) {
      if (ctx.format === 'esm') {
        return { js: '.mjs' };
      }

      return { js: '.js' };
    },
    target: 'es2022',
    treeshake: true,
    env: {
      // biome-ignore lint/style/useNamingConvention: The name is correct
      NODE_ENV: 'production',
    },
  };
});
