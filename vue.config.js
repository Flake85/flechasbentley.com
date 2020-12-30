module.exports = {
  devServer: {
    host: "0.0.0.0",
    disableHostCheck: true
  },

  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = process.env.VUE_APP_TITLE;
      return args;
    });
  }
};
