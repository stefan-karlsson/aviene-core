import { build } from '@aviene/tsup-config';

build({
    cwd: process.cwd(),
    entry: './src/index.ts'
});
