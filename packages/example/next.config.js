const withMinifyClassnames = require('nextjs-plugin-minify-css-classname')({
  enable: true,
});

module.exports = withMinifyClassnames({
  cssModules: true,
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
});
