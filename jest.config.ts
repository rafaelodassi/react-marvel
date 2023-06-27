const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/services/',
    '/src/store/',
    '/src/styles/',
    '/src/lib/',
    '/src/constants/',
    'styles.ts',
  ],
};

module.exports = createJestConfig(customJestConfig);
