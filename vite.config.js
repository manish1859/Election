import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/Election/',
// })
export default defineConfig({
  plugins: [React()],
  base: "/Election/", // 👈 yaha apna repo ka naam likho
});
