const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Example-Vue-Dashboard/'
    : '/'
});
