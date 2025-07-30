import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/marcoteorico-multi-agent/',
  plugins: [react()],
})
