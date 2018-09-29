module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{svg,html,css,js}'],
  swDest: 'dist/sw.js',
  navigateFallback: 'dist/index.html',
  clientsClaim: true,
  skipWaiting: true,
};
