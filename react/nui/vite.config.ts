import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
    base: './',
    plugins: [react()],
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