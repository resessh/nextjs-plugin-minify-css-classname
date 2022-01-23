const withMinifyClassnames = require('../lib')({
  enable: true,
});

module.exports = withMinifyClassnames({
  cssModules: true,
  reactStrictMode: true,
  pageExtensions: ['page.jsx'],
});
