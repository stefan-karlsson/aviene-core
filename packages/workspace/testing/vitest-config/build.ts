import { build } from '@aviene/tsup-config';

build({
    cwd: process.cwd(),
    entry: './src/integration-test.project.ts'
});

build({
  cwd: process.cwd(),
  entry: './src/unit-test.project.ts'
});