const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: !isProd,
  },
  images: { domain: ["cdn.sanity.io"] },
};

module.exports = withPWA({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: {
        loader: "url-loader",
      },
    });

    return config;
  },

  ...nextConfig,
});
