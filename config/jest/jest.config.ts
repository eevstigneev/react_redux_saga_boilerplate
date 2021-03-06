import {appSrc} from '../paths';

export const preset = "ts-jest";
// export const globalSetup =
export const rootDir = appSrc;
export const transform = {
  "^.+\\.tsx?$": "ts-jest",
};
export const testRegex = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
export const testPathIgnorePatterns = ["/node_modules/"];
export const moduleFileExtensions = ["ts", "tsx", "jsx", "json"];
export const collectCoverage = true;
