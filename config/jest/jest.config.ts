import type {Config} from '@jest/types';
import {appPath} from '../paths';

function mapFromRootDir(path: string): string {
  return `<rootDir>/${path}`;
}

const config: Config.InitialOptions = {
  rootDir: appPath,
  preset: 'ts-jest',
  transform: {'^.+\\.tsx?$': 'ts-jest'},
  collectCoverage: true,
  collectCoverageFrom: [mapFromRootDir('src/**/*.{ts,tsx,js,jsx}'), '!**/node_modules/**'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules', mapFromRootDir('src')],
  verbose: true,
  moduleNameMapper: {
    '^src/(.*)$': mapFromRootDir('src/$1'),
  },
  resetMocks: false,
  setupFiles: [mapFromRootDir('__mocks__/localStorage/setup.ts')],
};

export default config;
