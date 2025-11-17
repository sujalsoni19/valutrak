// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // or just 'tailwindcss' if using the older import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // 👈 This is the key part!
      config: {
        content: [
          // Specify the file patterns where you use Tailwind classes
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
      },
    }),
  ],
})