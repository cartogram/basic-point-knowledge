/* eslint-disable no-undef */

require('dotenv').config();

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
  env: {
    SITE_NAME: process.env.SITE_NAME,
  },
};
