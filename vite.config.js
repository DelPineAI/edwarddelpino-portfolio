import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep this ON so source is always recoverable from a deploy.
    sourcemap: true,
  },
});
