// vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages')
      // Agrega más alias según sea necesario
    }
  }
})
