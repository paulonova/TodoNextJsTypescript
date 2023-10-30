

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  //Provide the path to Next.js app to load next.config.js and .env
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "@/components/(.*)$": "<rootDir>/components/$1",
    "@/page/(.*)$": "<rootDir>/page/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
