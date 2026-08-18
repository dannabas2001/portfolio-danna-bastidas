import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: '/tu-repositorio/' -> cambia esto por el nombre exacto de tu repo de GitHub
// antes de publicar en GitHub Pages (ver README.md).
export default defineConfig({
  plugins: [react()],
  base: './portfolio-dannabastidas',
})
