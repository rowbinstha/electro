// vue.config.js
module.exports = {
  // Basic options
  publicPath: "/", // Base URL for your app
  outputDir: "dist", // Directory where the build files will be generated
  assetsDir: "assets", // Folder for static assets (js, css, img, fonts)
  __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",

  // Development server configuration
  devServer: {
    port: 8080, // Change the port if needed
    open: true, // Automatically open the browser
    proxy: null, // Proxy API calls to avoid CORS issues (optional)
  },

  // Enabling Source Maps in production build
  productionSourceMap: false, // Set to true for debugging production builds

  // Configuring CSS
  css: {
    sourceMap: true, // Enable CSS source maps for better debugging
  },

  // Enabling ESLint
  lintOnSave: true, // Automatically check code for linting issues

  // Configure Webpack (advanced)
  configureWebpack: {
    // Plugins and other webpack options
  },
};
