## Getting Started

### Requirements
- Mac OS X, Windows, or Linux
- [Yarn](https://yarnpkg.com/) package + [Node.js](https://nodejs.org/) v14.16 LTS or older
- Text editor or IDE pre-configured with React/JSX/TypeScript/ESlint

### Technologies used
- [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/) with [React hooks](https://reactjs.org/docs/hooks-intro.html)
- [Ant Design framework](https://ant.design/) with [Emotion](https://emotion.sh/)
- [Redux](https://redux.js.org/) integrated with [Redux-Saga](https://redux-saga.js.org/) and [Redux-Toolkit](https://redux-toolkit.js.org/)
- [Jest](https://jestjs.io/) for testing
- [Webpack](https://webpack.js.org/) for bundling

### Directory Layout
Before you start, take a moment to see how the project structure looks like:
```
.
├── __mocks__                  # Fake implementations and test data
├── assets                     # Static files which are copied into the /build/assets folder
├── build                      # The folder for compiled output
├── config                     # Config of the app, sourced by environment variables
├── coverage                   # The directory where Jest should output its coverage files.
├── node_modules               # 3rd-party libraries and utilities
├── src                        # Where your source code lives
│   ├── api                    # Base class for transport with available methods and configuration
│   ├── components             # Shared React components and containers
│   ├── entities               # Page/screen components along with own components separated by entities
│   ├── hooks                  # React hooks
│   ├── misc                   # Layout components or non-entity components
│   ├── store                  # Redux storage, redux slices, api
│   ├── styles                 # Global styles and helper function
│   ├── utils                  # Collection of utils function that we use in the project
│   ├── routes.ts              # The routing information
│   ├── types.ts               # Shared types of the app
│   └── index.ts               # Entry point of the API
│
├── .gitignore                 # Standard gitignore file
├── .eslintrc                  # ESlint configuration
├── .prettierrc                # Prettier configuration
├── jest.config.js             # Jest configuration
├── package.json               # Node module dependencies
├── README.md                  # Simple readme file
└── tsconfig.json              # TypeScript compiler options
└── yarn.lock                  # Fixed versions of all the dependencies
```

### Quick Start
#### 1. Run `yarn install`

This will install both run-time project dependencies and developer tools listed
in [package.json](./package.json) file.

#### 3. Run `yarn start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed
