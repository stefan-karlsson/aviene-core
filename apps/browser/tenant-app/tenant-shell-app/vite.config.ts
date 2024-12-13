import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { ViteAsyncImportMapPlugin } from './build/asyncImportMapPlugin';

export default defineConfig(({ mode }) => {
    const isProd = mode === 'production';

    return {
        build: {
            manifest: isProd,
            minify: true,
        },
        plugins: [
            ViteEjsPlugin(),
            ViteAsyncImportMapPlugin({
                importMapUrl: 'http://tenant-shell-app.s3-website.eu-north-1.amazonaws.com/importmap.json',
                entryScript: 'src/main.ts'
            })
        ],
    }
})