import withMinifyClassnames, { Config } from '.';
import type { NextConfig } from 'next';

describe('withMinifyClassnames', () => {
  it('directly decorate argument when takes NextConfig.', () => {
    const config: NextConfig = { cssModule: true };
    const result: NextConfig = withMinifyClassnames(config);

    expect(result).toHaveProperty('cssModule', true);
    expect(result.webpack).toBeInstanceOf(Function);
  });

  it('returns NextConfig decorator when takes plugin configs.', () => {
    const config: Config = { enabled: true };
    const result = withMinifyClassnames(config);

    expect(result).toBeInstanceOf(Function);
  });
});
