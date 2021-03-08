import type {Config} from '@jest/types';
import {appSrc} from '../paths';

function mapFromRootDir(path: string): string {
  return `<rootDir>/${path}`;
}

const config: Config.InitialOptions = {
  rootDir: appSrc,
  preset: 'ts-jest',
  transform: {'^.+\\.tsx?$': 'ts-jest'},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!**/node_modules/**'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules', mapFromRootDir('src')],
  verbose: true,
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/$1',
  },
};

export default config;
