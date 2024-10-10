// const nextJest = require("next/jest");

// const createJestConfig = nextJest({
//   dir: "./",
// });

// const customJestConfig = {
//   coverageProvider: 'v8',
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/$1',
//   },
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//   },
//   globals: {
//     'ts-jest': {
//       tsconfig: './tsconfig.json', 
//     },
//   },
// };

// module.exports = createJestConfig(customJestConfig);

module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Se você estiver usando TypeScript
  },
  testTimeout: 30000, // Aumenta o tempo limite, se necessário
};