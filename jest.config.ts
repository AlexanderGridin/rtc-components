import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["./setupTests.config.ts"],
};

export default config;
