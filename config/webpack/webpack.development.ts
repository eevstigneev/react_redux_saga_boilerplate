import {webpackCommon} from './webpack.common';

const mode = 'development' as const;
process.env.BABEL_ENV = mode;
process.env.NODE_ENV = mode;

export default webpackCommon({mode});
