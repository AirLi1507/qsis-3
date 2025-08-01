import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-oxc'
import tailwindcss from '@tailwindcss/vite'
import Unfonts from "unplugin-fonts/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Unfonts({ google: { families: ["Ubuntu", "Noto Sans TC"] } })
  ],
  server: {
    allowedHosts: true
  },
  ssr: {
    noExternal: true
  },
  resolve: {
    alias: {
      // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs'
    },
  }
})
