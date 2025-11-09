// vite.config.ts
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// The GitHub Pages URL will be: https://Asim2005.github.io/wetechon1/
// The base path must match the repository name.
const repoName = 'wetechon1'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: `/${repoName}/`, // 👈 ADD THIS LINE
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})