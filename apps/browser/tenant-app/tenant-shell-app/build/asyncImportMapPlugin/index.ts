import { Plugin } from "vite";
import { stringifyAsyncImportMapScript } from "./stringifyAsyncImportMapScript";

interface Config {
  importMapUrl: string;
  entryScript: string;
}

export function ViteAsyncImportMapPlugin(config: Config): Plugin {
  const { importMapUrl, entryScript } = config;

  return {
    name: "vite-plugin-async-import-map",

    transformIndexHtml: {
      order: "pre",
      async handler(html) {
        return {
          html,
          tags: [{
            tag: 'script',
            children: stringifyAsyncImportMapScript({ importMapUrl, entryScript }),
            injectTo: 'body-prepend'
          }]
        }
      }
    }
  };
}