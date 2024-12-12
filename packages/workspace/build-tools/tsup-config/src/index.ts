import path from 'node:path';

import {
    Options,
    build as tsupBuild,
} from 'tsup';

// TODO: @stefan-karlsson does it make sense to call this package @aviene/build instead? If we define an build interface it is easy to switch our build system.

type BuildOptions = Options | ((isProd: boolean) => Options);
interface BuildFlavor {
  name: string;
  options: BuildOptions;
}

const baseOptions: Options = {
    target: 'es2022',
    sourcemap: false,
    clean: true,
    tsconfig: './tsconfig.build.json'
};

const builds: BuildFlavor[] = [
    {
        name: 'commonjs',
        options: (isProd: boolean) => ({
            format: ['cjs'],
            minify: isProd,
            outExtension: () => ({
                js: isProd ? '.prod.cjs' : '.cjs',
            }),
        }),
    },
    {
        name: 'esm-bundler',
        options: {
            format: ['esm'],
            outExtension: () => ({
                js: '.bundler.mjs',
            })
        },
    },
    {
        name: 'esm-browser',
        options: (isProd: boolean) => ({
            format: ['esm'],
            minify: isProd,
            outExtension: () => ({
                js: isProd ? '.browser.prod.mjs' : '.browser.mjs',
            }),
        }),
    },
];

interface BuildParams {
  cwd: string;
  entry: string;
  options?: BuildOptions
}

export async function build(params: BuildParams) {
  const { cwd, entry, options } = params;

    const entryFile = path.resolve(cwd, entry);
    const outDir = path.resolve(cwd, './dist');

    console.log(`building: ${entryFile}`)

    for (const { options: buildOptions} of builds) {

        const resolvedOptionSets = typeof buildOptions === 'function'
            ? [buildOptions(false), buildOptions(true)]
            : [buildOptions];

        for (const resolvedOptions of resolvedOptionSets) {
            await tsupBuild({
                ...baseOptions,
                ...resolvedOptions,
                ...options,
                outDir,
                entry: [
                    entryFile,
                ],
            });


        }
    }
}