import path from 'path';
import type { NextConfig } from 'next';
import type { LoaderContext } from 'webpack';
import { SequentialClassnameGenerator } from './generator';

const localIdentGenerator = new SequentialClassnameGenerator();
const getMinifiedLocalIdent = (
  context: LoaderContext<{}>,
  _: string,
  exportName: string
) => {
  const relativePath = path
    .relative(context.rootContext, context.resourcePath)
    .replace(/\\+/g, '/');

  return localIdentGenerator.get(`${relativePath}-${exportName}`);
};

type Config = {
  enabled?: boolean;
};
const withMinifyClassnames =
  ({ enabled }: Config) =>
  (originalNextConfig: NextConfig): NextConfig => ({
    ...originalNextConfig,
    webpack(config, context) {
      const webpackResult =
        typeof originalNextConfig.webpack === 'function'
          ? originalNextConfig.webpack(config, context)
          : config;

      if (enabled === false || (enabled === undefined && !context.dev)) {
        return webpackResult;
      }

      for (const rule of webpackResult.module.rules) {
        if (Array.isArray(rule.oneOf)) {
          for (const oneOfRule of rule.oneOf) {
            if (
              oneOfRule.sideEffects === false &&
              Array.isArray(oneOfRule.use)
            ) {
              for (const loader of oneOfRule.use) {
                if (/\/css-loader\//.test(loader.loader)) {
                  if (!!loader.options.modules) {
                    loader.options.modules.getLocalIdent =
                      getMinifiedLocalIdent;
                  }
                }
              }
            }
          }
        }
      }

      return webpackResult;
    },
  });

module.exports = withMinifyClassnames;
