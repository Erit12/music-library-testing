
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transformIgnorePatterns: [
    'node_modules/(?!react-router-dom)/'  // Asegura que react-router-dom se transforme
  ]
};