import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'node:path'

export default defineConfig({
    base: './',
    plugins: [svelte()],
    build: {
        target: 'chrome103', // matches the CEF version FiveM's NUI runs
        sourcemap: false
    },
    server: {
        open: true,
        port: 3001
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
})