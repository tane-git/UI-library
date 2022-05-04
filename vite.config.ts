import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    lib: {
      entry: 'index.ts',
      name: 'vite-project',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'antd', 'react'
      ],
      output: {
        globals: {
          'antd': 'antd',
          'react': 'React',
        }
      },
    },
  }
})