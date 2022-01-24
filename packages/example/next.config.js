// @ts-check
/**
 * without config
 */
const { withMinifyClassnames } = require('nextjs-plugin-minify-css-classname');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withMinifyClassnames({
  cssModules: true,
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
});

/**
 * with config
 */
// const {
//   withMinifyClassnamesConfig,
// } = require('nextjs-plugin-minify-css-classname');

// /**
//  * @type {import('next').NextConfig}
//  */
// module.exports = withMinifyClassnamesConfig({ enabled: true })({
//   cssModules: true,
//   reactStrictMode: true,
//   pageExtensions: ['page.tsx'],
// });
