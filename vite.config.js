import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// For GitHub Pages project sites set VITE_BASE=/mathan-portfolio/ at build time
export default defineConfig({base:process.env.VITE_BASE||'/',plugins:[react(),tailwindcss()],build:{rollupOptions:{output:{manualChunks:{motion:['framer-motion']}}}}})
