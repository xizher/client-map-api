/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    proxy: {
      '/cesium': {
        target: 'http://localhost/cesium',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/cesium/, '')
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@cp': path.resolve(__dirname, 'src', 'components'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks')
    }
  },
  plugins: [
    vue(),
  ]
})
