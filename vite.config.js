import { defineConfig } from 'vite';

export default defineConfig({
  base: '/underwater-balloons-pop/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  publicDir: 'public',
});

