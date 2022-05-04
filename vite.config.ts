import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// other imports from example:
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require('./package.json')

export default defineConfig({
  plugins: [react(), dts()],
  // plugins: [react() ],
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
      // externals: [
      //   'antd',
      //   'react',
      // ]
    },
    rollupOptions: {
      external: [
        'antd', 'react'
      ],
      // input: 'src/components/index.ts',
      output: {
        globals: {
          'antd': 'antd',
          'react': 'React',
        }
      //   // "main": "dist/components/index.d.ts",
      //   // "module": "dist/components/index.d.ts",
      //   // assetFileNames: 'dist/index.js'
      //   // assetFileNames: 'assets/[name]-[extname]'
      //   // esModule
      },
      // plugins: [
      //   // peerDepsExternal(),
      //   // resolve(),
      //   // commonjs(),
      //   // typescript({ useTsconfigDeclarationDir: true }),
      //   // postcss()
      // ]
    },
  }
})