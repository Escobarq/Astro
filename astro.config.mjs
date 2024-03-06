import { defineConfig } from 'astro/config';
import { resolve } from 'path';
import fs from 'fs-extra';

export default defineConfig({
  buildOptions: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  resolve: {
    alias: {
      '@components': './src/components',
      '@pages': './src/pages'
      // Agrega más alias según sea necesario
    }
  },
  tasks: {
    async postStart() {
      // Ruta de la carpeta de origen (src/assets)
      const sourcePath = resolve(__dirname, 'src/assets');
      // Ruta de la carpeta de destino (public/assets)
      const destinationPath = resolve(__dirname, 'public/assets');
      
      // Copiar archivos desde la carpeta de origen a la carpeta de destino
      await fs.copy(sourcePath, destinationPath);
    }
  }
});
