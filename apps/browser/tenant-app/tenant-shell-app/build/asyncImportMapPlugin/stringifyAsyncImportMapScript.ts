interface Config {
    importMapUrl: string
    entryScript: string
}

export function stringifyAsyncImportMapScript(config: Config) {

    const { importMapUrl, entryScript } = config;

    return `
    const loadImportMap = async () => {
        const imports = await (
            await fetch("${importMapUrl}")
        ).json();
        const im = document.createElement("script");
        im.type = "importmap";
        im.textContent = JSON.stringify({ imports });
        document.head.append(im);
    };

    const loadScript = async () => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "/${entryScript}";
        script.crossOrigin = true;
        document.body.appendChild(script);
    };

    (async () => {
        await loadImportMap();
        await loadScript();
    })();
    `
}