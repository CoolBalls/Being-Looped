import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow connections from any address
    port: 5173, // Ensure the port is correct
    hmr: {
      protocol: 'ws',
      host: 'localhost', // Or '0.0.0.0'
      port: 5173,
    },
  },
});
