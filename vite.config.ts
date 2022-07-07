import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@validators', replacement: path.resolve(__dirname, './src/validators') },
      { find: '@constants', replacement: path.resolve(__dirname, './src/constants') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') }
    ]
  },
  plugins: [react()]
})
