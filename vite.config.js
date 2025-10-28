import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
    },
  },
  optimizeDeps: {
    include: [
      '@babel/runtime',
      '@babel/runtime/helpers/esm/createSuper',
      '@babel/runtime/helpers/esm/classCallCheck',
      '@babel/runtime/helpers/esm/possibleConstructorReturn',
      '@babel/runtime/helpers/esm/getPrototypeOf',
    ],
  },
  build: {
    outDir: 'dist',
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
})
