import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
      name: 'Furniro Furniture Site',
      short_name: 'Furniro',
      description: 'Furniture site that have a lot of fabric f',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/icons/32.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/32.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })
]
})

