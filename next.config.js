// const defaultRuntimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public", // Output directory for service worker
  register: true, // Automatically register service worker
  skipWaiting: true, // Activate service worker immediately
  // scope: '/app',
  // sw: 'service-worker.js',
  // runtimeCaching: [
  //   {
  //     urlPattern: /\/api\/todoitem/,
  //     method: "GET",
  //     handler: "StaleWhileRevalidate",
  //     options: {
  //       cacheName: "todoApp-api",
  //       expiration: {
  //         maxEntries: 64,
  //         maxAgeSeconds: 1 * 60 * 60, // 24 hours
  //       },
  //     },
  //   },
  //   ...defaultRuntimeCaching,
  // ],
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
});
