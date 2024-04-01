// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          "group-user": ["./src/UserDetails", "./src/UserDashboard", "./src/UserProfileEdit"]
        }
      }
    }
  }
});
