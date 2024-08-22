export default {
  preset: "ts-jest",
  verbose: true,
  maxWorkers: 2,
  testMatch: ["<rootDir>/packages/**/__tests__/**/*.(spec|test).ts?(x)"],
};
