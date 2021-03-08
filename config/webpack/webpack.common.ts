/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
/* eslint-enable */
import {optimization} from './shared/webpack.optimization';
import {devServer} from './shared/webpack.server';
import {module} from './shared/webpack.module';
import * as paths from '../paths';

export function webpackCommon({mode}: Pick<Required<webpack.Configuration>, 'mode'>): webpack.Configuration {
  const isEnvDevelopment = mode === 'development';
  const isEnvProduction = mode === 'production';

  const target = 'web';
  const devtool = isEnvProduction ? 'source-map' : 'eval';
  const entry = [paths.appEntry];

  const resolve = {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      src: paths.appSrc,
    },
  };

  const hash = isEnvProduction ? '[contenthash:8].' : '';
  const output = {
    path: paths.appBuild,
    filename: `js/[name].${hash}js`,
    chunkFilename: `js/[name].${hash}chunk.js`,
    publicPath: '/',
    globalObject: 'this',
  };

  const plugins = [
    isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),

    isEnvProduction &&
      new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['build/*.*', 'dist/*.*'], verbose: false}),
    isEnvProduction && new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),

    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      title: 'Webpack',
      template: paths.appHtml,
      filename: 'index.html',
      inject: true,
      assetsPath: '/assets/',
      scriptLoading: 'defer',
      minify: isEnvProduction
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          }
        : false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'assets',
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),
  ].filter(Boolean) as webpack.WebpackPluginInstance[];

  return {
    mode,
    target,
    devtool,
    entry,
    output,
    module,
    resolve,
    plugins,
    ...(isEnvProduction ? {optimization} : {devServer}),
  };
}
