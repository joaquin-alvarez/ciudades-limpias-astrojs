// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://joaquin-alvarez.github.io',
    base: '/ciudades-limpias-astrojs',
    build: {
        assets: '_astro',
        inlineStylesheets: 'auto'
    },
    vite: {
        build: {
            minify: true,
            cssMinify: true,
            cssCodeSplit: true,
        },
    },
});