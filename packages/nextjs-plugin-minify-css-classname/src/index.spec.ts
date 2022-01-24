import { withMinifyClassnames, withMinifyClassnamesConfig } from '.';
import type { Config, DecoratedNextConfig } from '.';
import type { NextConfig } from 'next';

const noop = () => {};
const createMockWebpackConfig = (): any => ({
  module: {
    rules: [
      {
        oneOf: [
          {
            sideEffects: false,
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    getLocalIdent: noop,
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
});
const createMockWebpackContext = (dev: boolean) =>
  ({
    dev,
  } as any as {
    dir: string;
    dev: boolean;
    isServer: boolean;
    buildId: string;
    config: any;
    defaultLoaders: {
      babel: any;
    };
    totalPages: number;
    webpack: any;
  });

describe('nextjs-plugin-minify-css-classname', () => {
  let nextConfig: NextConfig;

  beforeEach(() => {
    nextConfig = { cssModule: true };
  });

  describe('withMinifyClassnames', () => {
    it('works on production build', () => {
      const decoratedNextConfig = withMinifyClassnames(nextConfig);
      const decoratedWebpackConfig = decoratedNextConfig.webpack(
        createMockWebpackConfig(),
        createMockWebpackContext(false)
      );

      expect(
        decoratedWebpackConfig.module.rules[0].oneOf[0].use[0].options.modules
          .getLocalIdent
      ).not.toBe(noop);
    });

    it('does not work on dev build', () => {
      const decoratedNextConfig = withMinifyClassnames(nextConfig);
      const decoratedWebpackConfig = decoratedNextConfig.webpack(
        createMockWebpackConfig(),
        createMockWebpackContext(true)
      );

      expect(
        decoratedWebpackConfig.module.rules[0].oneOf[0].use[0].options.modules
          .getLocalIdent
      ).toBe(noop);
    });
  });

  describe('withMinifyClassnamesConfig', () => {
    it('works on dev build when takes enabled "true"', () => {
      const decoratedNextConfig = withMinifyClassnamesConfig({ enabled: true })(
        nextConfig
      );
      const decoratedWebpackConfig = decoratedNextConfig.webpack(
        createMockWebpackConfig(),
        createMockWebpackContext(true)
      );

      expect(
        decoratedWebpackConfig.module.rules[0].oneOf[0].use[0].options.modules
          .getLocalIdent
      ).not.toBe(noop);
    });

    it('does not work on prod build when takes enabled "false"', () => {
      const decoratedNextConfig = withMinifyClassnamesConfig({
        enabled: false,
      })(nextConfig);
      const decoratedWebpackConfig = decoratedNextConfig.webpack(
        createMockWebpackConfig(),
        createMockWebpackContext(false)
      );

      expect(
        decoratedWebpackConfig.module.rules[0].oneOf[0].use[0].options.modules
          .getLocalIdent
      ).toBe(noop);
    });
  });

  describe('when plugin enabled', () => {
    it('executes defined webpack function', () => {
      const webpack = jest.fn((webpack) => ({
        ...webpack,
        mode: 'development',
      }));
      const decoratedNextConfig = withMinifyClassnamesConfig({ enabled: true })(
        { ...nextConfig, webpack }
      );

      const decoratedWebpackConfig = decoratedNextConfig.webpack(
        createMockWebpackConfig(),
        createMockWebpackContext(false)
      );

      expect(webpack).toHaveBeenCalledTimes(1);
      expect(decoratedWebpackConfig.mode).toBe('development');
    });
  });
});
