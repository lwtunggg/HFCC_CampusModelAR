import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  server: {
    headers: {
      // Required for camera access in dev
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    }
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  }
})
