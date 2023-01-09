const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,

  images: {
    domains: [
      "avatars.githubusercontent.com",
      "external-content.duckduckgo.com",
      "www.rlogical.com",
      "i.pinimg.com",
    ],
  },
});
