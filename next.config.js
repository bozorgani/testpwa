
const withPWA = require('next-pwa')({
  dest: 'public', // Output directory for service worker
  // register: true, // Automatically register service worker
  // skipWaiting: true, // Activate service worker immediately
  // scope: '/app',
  sw: 'service-worker.js',
  disable: process.env.NODE_ENV === 'development',
  
});

module.exports = withPWA({
  reactStrictMode: false,
});

