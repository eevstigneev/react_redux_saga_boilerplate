import * as WebpackDevServer from "webpack-dev-server";

export const devServer: WebpackDevServer.Configuration = {
  host: '0.0.0.0', // If you want your server to be accessible externally
  historyApiFallback: true,
  open: true,
  compress: true,
  hot: true,
  port: 3000,
  transportMode: 'ws',
  injectClient: true,
  proxy: {
    '/api': 'http://localhost:5000/',
  }
};
