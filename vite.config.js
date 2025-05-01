import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false
        }),
        commonjs()
      ]
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  }
})