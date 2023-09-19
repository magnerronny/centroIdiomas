import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 6001,  //  
  //   host:"10.1.2.65"
  // },

  // proxy: {
  //   '/api': {
  //     target: 'http://10.1.2.70/api-celen-matriculas/public/', // URL de tu servidor API
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, ''), // Opcional, si deseas quitar /api del path
  //   },
  // },
})
