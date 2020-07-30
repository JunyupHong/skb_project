module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },
  publicPath: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          $ENV: ${process.env.NODE_ENV};
        `
      }
      // less: {
      //   javascriptEnabled: true
      // }
    }
  },
  // "transpileDependencies": [
  //   "vuetify"
  // ]
};