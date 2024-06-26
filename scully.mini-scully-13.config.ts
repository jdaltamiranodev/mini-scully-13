import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
    projectRoot: './src',
    projectName: 'mini-scully-13',
    distFolder: './dist/mini-scully-13', // output directory of your Angular build artifacts
    outDir: './dist/static', // directory for scully build artifacts
    defaultPostRenderers: [],
    routes: {
        '/posts/:id': {
            type: 'contentFolder',
            id: {
                folder: "./static"
            }
        },
    }
}