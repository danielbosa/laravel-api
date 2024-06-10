// vite.config.js
import { defineConfig } from "file:///C:/esercizi_boolean/laravel-api/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/esercizi_boolean/laravel-api/node_modules/laravel-vite-plugin/dist/index.js";
import * as path from "path";
var __vite_injected_original_dirname = "C:\\esercizi_boolean\\laravel-api";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: ["resources/scss/app.scss", "resources/js/app.js"],
      refresh: true
    })
  ],
  // Add resolve object and aliases
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__vite_injected_original_dirname, "node_modules/bootstrap"),
      "~@fortawesome": path.resolve(__vite_injected_original_dirname, "node_modules/@fortawesome"),
      "~resources": "/resources/"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxlc2VyY2l6aV9ib29sZWFuXFxcXGxhcmF2ZWwtYXBpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxlc2VyY2l6aV9ib29sZWFuXFxcXGxhcmF2ZWwtYXBpXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9lc2VyY2l6aV9ib29sZWFuL2xhcmF2ZWwtYXBpL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBsYXJhdmVsIGZyb20gXCJsYXJhdmVsLXZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBbXCJyZXNvdXJjZXMvc2Nzcy9hcHAuc2Nzc1wiLCBcInJlc291cmNlcy9qcy9hcHAuanNcIl0sXG4gICAgICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIC8vIEFkZCByZXNvbHZlIG9iamVjdCBhbmQgYWxpYXNlc1xuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgIFwifmJvb3RzdHJhcFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXBcIiksXG4gICAgICAgICAgICBcIn5AZm9ydGF3ZXNvbWVcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcIm5vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWVcIiksXG4gICAgICAgICAgICBcIn5yZXNvdXJjZXNcIjogXCIvcmVzb3VyY2VzL1wiLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVIsU0FBUyxvQkFBb0I7QUFDbFQsT0FBTyxhQUFhO0FBQ3BCLFlBQVksVUFBVTtBQUZ0QixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDSixPQUFPLENBQUMsMkJBQTJCLHFCQUFxQjtBQUFBLE1BQ3hELFNBQVM7QUFBQSxJQUNiLENBQUM7QUFBQSxFQUNMO0FBQUE7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILGNBQW1CLGFBQVEsa0NBQVcsd0JBQXdCO0FBQUEsTUFDOUQsaUJBQXNCLGFBQVEsa0NBQVUsMkJBQTJCO0FBQUEsTUFDbkUsY0FBYztBQUFBLElBQ2xCO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==