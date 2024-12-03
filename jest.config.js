module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!axios)", // Faz o Jest transformar os módulos do axios
  ],
  moduleNameMapper: {
    "^react-router-dom$": "<rootDir>/src/__mocks__/react-router-dom.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
