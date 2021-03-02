import {webpackCommon} from './webpack.common';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

export default webpackCommon('production');
