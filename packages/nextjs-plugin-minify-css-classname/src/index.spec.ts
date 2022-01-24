import withMinifyClassnames, { Config, DecoratedNextConfig } from '.';
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

describe('withMinifyClassnames', () => {
  let nextConfig: NextConfig;

  beforeEach(() => {
    nextConfig = { cssModule: true };
  });

  describe('when "enabled" option is undefined', () => {
    let decoratedNextConfig: DecoratedNextConfig;

    beforeEach(() => {
      decoratedNextConfig = withMinifyClassnames()(nextConfig);
    });

    afterEach(() => {});

    it('works on production build', () => {
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

  describe('when "enabled" option is true', () => {
    const config: Config = { enabled: true };

    let decoratedNextConfig: DecoratedNextConfig;

    beforeEach(() => {
      decoratedNextConfig = withMinifyClassnames(config)(nextConfig);
    });

    it('works on dev build', () => {
      const decoratedWebpackConfig = decoratedNextConfig.webpack(
        createMockWebpackConfig(),
        createMockWebpackContext(true)
      );

      expect(
        decoratedWebpackConfig.module.rules[0].oneOf[0].use[0].options.modules
          .getLocalIdent
      ).not.toBe(noop);
    });

    it('works on prod build', () => {
      const decoratedWebpackConfig = decoratedNextConfig.webpack(
        createMockWebpackConfig(),
        createMockWebpackContext(false)
      );

      expect(
        decoratedWebpackConfig.module.rules[0].oneOf[0].use[0].options.modules
          .getLocalIdent
      ).not.toBe(noop);
    });
  });
});
