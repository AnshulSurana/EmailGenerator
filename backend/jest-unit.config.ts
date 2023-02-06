import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  // [...]
  rootDir: '.',
  preset: 'ts-jest/presets/default-esm', // or other ESM presets
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  testMatch: ["<rootDir>/test/**/*.test.ts"],
  verbose: true,
  testEnvironment: "node",
  collectCoverage: true,
  reporters: [
    "default",
    [
      "<rootDir>/node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report",
        outputPath: "./__tests__/reports/test-report.html",
        includeFailureMsg: true,
      },
    ],
  ],
  testEnvironmentOptions: {
    url: "https://localhost:3000",
  },
}

export default jestConfig

// export default {
//     preset: 'ts-jest',
//     rootDir: '.',
//     verbose: true,
//     testEnvironment: "node",
//     collectCoverage: true,
//     coverageDirectory: "<rootDir>/coverage",
//     coverageReporters: ["text", "lcov"],
//     coverageThreshold: {
//       global: {
//         branches: 40,
//         lines: 40,
//       },
//     },
//     reporters: [
//       "default",
//       [
//         "<rootDir>/node_modules/jest-html-reporter",
//         {
//           pageTitle: "Test Report",
//           outputPath: "./__tests__/reports/test-report.html",
//           includeFailureMsg: true,
//         },
//       ],
//     ],
//     testMatch: ["/test/**/*.test.ts"],
//     globals: {
//       IS_DEVELOPMENT: true,
//     },
//     testEnvironmentOptions: {
//       url: "https://localhost:3000",
//     },
//     transform: {
//       "^.+\\.tsx?$": "ts-jest"
//     },
//   };