const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        // Storybook will understand how handle storybook/** import alias
        storybook: path.resolve(__dirname, "../src/storybook"),
      },
    },
  }),
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
