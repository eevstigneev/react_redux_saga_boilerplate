import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

export const appPackage = resolveApp('package.json');
export const appPath = resolveApp('.');
export const appBuild = resolveApp('build');
export const appAssets = resolveApp('assets');
export const appHtml = resolveApp('config/template.html');
export const appSrc = resolveApp('src');
export const appEntry = resolveApp('src/index');
