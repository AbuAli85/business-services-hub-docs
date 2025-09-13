
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
    // This is crucial for single-page applications (SPAs) like React Router.
    // It ensures that when a user directly accesses a route like /docs/some-doc.html,
    // the server returns index.html, and then React Router takes over to render the correct component.
    // However, for direct static asset access (like our .html files in public/docs),
    // we need to ensure they are served directly without falling back to index.html.
    // The current issue is that the deployment environment is likely misconfigured to serve
    // all non-matching paths to index.html, even for static files that exist.
    // For local development, Vite's static file serving should handle public/docs/*.html correctly.
    // The problem is likely in the deployment environment's server configuration.
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
    // Ensure that static assets in the public folder are copied to the dist folder
    // This is usually handled by Vite automatically, but explicitly stating it doesn't hurt.
    assetsDir: 'assets',
  },
})


