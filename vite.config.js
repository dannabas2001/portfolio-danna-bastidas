import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: './' usa rutas relativas, así que funciona tanto en Vercel (raíz del
// dominio) como en GitHub Pages (subruta /portfolio-danna-bastidas/) sin
// tener que cambiar nada entre despliegues.
export default defineConfig({
  plugins: [react()],
  base: './',
})
