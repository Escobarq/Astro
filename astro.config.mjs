import { defineConfig } from 'astro/config';

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
  }
});
