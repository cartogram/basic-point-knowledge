/* eslint-disable no-undef */
const withImages = require('next-images');

require('dotenv').config();

module.exports = withImages({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
});
