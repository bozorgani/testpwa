
const withPWA = require('next-pwa')({
  //dest: 'public', // Output directory for service worker
  register: true, // Automatically register service worker
  skipWaiting: true, // Activate service worker immediately
  scope: '/app',
  sw: 'service-worker.js',
  disable: false,
  
});

module.exports = withPWA({
  reactStrictMode: true,
});

