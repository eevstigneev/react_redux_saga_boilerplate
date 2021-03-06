import {appSrc} from '../../paths';
import themeVariables from '../../theme/antd-theme';

export const module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      include: appSrc,
      use: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: '> 0.2%, not dead',
                  },
                  modules: false,
                },
              ],
              '@babel/preset-typescript',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                  importSource: '@emotion/react',
                },
              ],
            ],
            plugins: [['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}], '@emotion/babel-plugin'],
          },
        },
      ],
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
              modifyVars: themeVariables,
            },
          },
        },
      ],
    },
  ],
};
