import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
    base: './',
    plugins: [vue()],
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