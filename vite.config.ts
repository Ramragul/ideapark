// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
//   },
// });


// Version 1:

// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"
// import tsconfigPaths from "vite-tsconfig-paths"

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
// })


// Version 2 : build version

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: 'dist', 
  },
});