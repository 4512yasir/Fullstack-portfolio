import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ IMPORTANT: Change this to match your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/Fullstack-portfolio/', // <-- must match your repo name
})
