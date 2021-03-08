// eslint-disable-next-line import/no-extraneous-dependencies
import WebpackDevServer from 'webpack-dev-server';

export const devServer: WebpackDevServer.Configuration = {
  host: '0.0.0.0', // If you want your server to be accessible externally
  historyApiFallback: true,
  open: true,
  compress: true,
  hot: true,
  port: 3000,
  transportMode: 'ws',
  injectClient: true,
  http2: true,
  proxy: {
    '/api': 'http://localhost:5000/',
  },
};
