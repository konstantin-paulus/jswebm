import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
    let publicDir = true;
    if (command === 'build') {
        publicDir = false;
    }

    return {
        publicDir,
        build: {
            lib: {
                entry: path.resolve(__dirname, 'src/index.js'),
                name: 'jswebm',
                formats: ['es'],
                fileName: 'jswebm'
            },
            rollupOptions: {
                external: [
                    '/tests/',
                ],
            },
        },
    }
});
