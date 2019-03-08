const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/fire-doge", {
      target: "http://www.fire-doge.cn:5000",
      changeOrigin: true,
      pathRewrite: {
        '^/fire-doge': ''
      }
    })
  );
};