module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/cypress'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/packages/nextjs-plugin-minify-css-classname/src/**/*.ts',
  ],
};
