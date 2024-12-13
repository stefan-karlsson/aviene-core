#!/usr/bin/env node

import { readFile } from 'node:fs/promises';

type ReadFilePathType = Parameters<typeof readFile>[0];

type URLEndpoint = string | URL | Request;

interface PublishAssetEndpoints {
    uploadAsset: URLEndpoint
    updateImportMap: URLEndpoint
}

interface Config {
    manifestPath: ReadFilePathType;

    encoding?: BufferEncoding

    endpoints: PublishAssetEndpoints
}

export async function publishAssets(config: Config) {
    const { manifestPath, encoding, endpoints } = config;

    const manifest = await readFile(manifestPath, encoding ?? 'utf8')

    const bundledFile = JSON.parse(manifest)['index.html'].file

    const formData = new FormData()

    const blobParts = readFile(`./dist/${bundledFile}`)

    formData.append('file', new Blob([bundledFile], { type: 'text/javascript' }))

    const packageJsonContent = await readFile("./package.json", encoding);
    const packageJson = JSON.parse(packageJsonContent.toString());

    formData.append('microfrontend-name', packageJson.name)

    await fetch(endpoints.uploadAsset, {
        method: 'POST',
        body: formData,
        headers: {}
    })

    for (const [dependencyName, dependencyVersion] of Object.entries(
        packageJson.dependencies || {}
    )) {
        const body = `dependency-name=${dependencyName}&dependency-version=${dependencyVersion.replace("^", "")`;

        await fetch(endpoints.updateImportMap, {
            method: 'PUT',
            body,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
    }
}