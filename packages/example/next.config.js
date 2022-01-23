// const withMinifyClassnames = require('nextjs-plugin-minify-css-classname')({
//   enabled: true,
// });
const withMinifyClassnames = require('nextjs-plugin-minify-css-classname');

module.exports = withMinifyClassnames({
  cssModules: true,
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
});
