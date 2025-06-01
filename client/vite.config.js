import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if using React

export default defineConfig({
  plugins: [react()],
  base: '/amazon-clone/', // important for GitHub Pages
})