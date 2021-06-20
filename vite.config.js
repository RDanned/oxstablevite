import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import path from 'path/posix'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, '/src/')
      }
    ],
    //extensions: ['*', '.js', '.vue', '.json',]
  },
  assetsDir: '/oxstablevite/',
  publicDir: '/oxstablevite/',
  base: '/oxstablevite/'
})
