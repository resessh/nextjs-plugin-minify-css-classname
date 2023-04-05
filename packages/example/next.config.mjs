// @ts-check
/**
 * without config
 */
import { withMinifyClassnames } from 'nextjs-plugin-minify-css-classname';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withMinifyClassnames({
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
});

/**
 * with config
 */
// import {
//   withMinifyClassnamesConfig,
// } from 'nextjs-plugin-minify-css-classname';

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = withMinifyClassnamesConfig({ enabled: true })({
//   reactStrictMode: true,
//   pageExtensions: ['page.tsx'],
// });

export default nextConfig;
