module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom", // Configura o ambiente correto
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Ignorar arquivos de estilo
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Extensões de teste
};
