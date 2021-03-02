import TerserPlugin from 'terser-webpack-plugin'

export const optimization = {
  splitChunks: {
    chunks: 'all',
    // name: true,
  },
  runtimeChunk: {
    name: (entrypoint: Record<string, string>) => `runtime-${entrypoint.name}`,
  },
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        parse: {
          ecma: 2018,
        },
        compress: {
          ecma: 5,
          comparisons: false,
          inline: 2,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      parallel: true,
    }),
  ],
}

