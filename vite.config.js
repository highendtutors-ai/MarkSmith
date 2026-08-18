import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages:
// If your repo is https://github.com/<user>/<repo>, the site is served at
// https://<user>.github.io/<repo>/ — so `base` must match `/<repo>/`.
// Change 'marksmith' below to your actual repo name if it's different.
// If you're deploying to a custom domain OR to <user>.github.io (a user site),
// set base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/marksmith/',
})
