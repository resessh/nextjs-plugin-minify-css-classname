import { SequentialClassnameGenerator } from './generator';

describe('SequentialClassnameGenerator', () => {
  let generator: SequentialClassnameGenerator;

  beforeEach(() => {
    generator = new SequentialClassnameGenerator('abc');
  });

  it('returns minified and sequencial classname.', () => {
    expect(generator.get('1')).toBe('a');
    expect(generator.get('2')).toBe('b');
    expect(generator.get('3')).toBe('c');
    expect(generator.get('4')).toBe('aa');
    expect(generator.get('5')).toBe('ab');
    expect(generator.get('6')).toBe('ac');
    expect(generator.get('7')).toBe('ba');
    expect(generator.get('8')).toBe('bb');
    expect(generator.get('9')).toBe('bc');
    expect(generator.get('10')).toBe('ca');
    expect(generator.get('11')).toBe('cb');
    expect(generator.get('12')).toBe('cc');
    expect(generator.get('13')).toBe('aaa');
    expect(generator.get('14')).toBe('aab');
    expect(generator.get('15')).toBe('aac');
    expect(generator.get('16')).toBe('aba');
    expect(generator.get('17')).toBe('abb');
    expect(generator.get('18')).toBe('abc');
    expect(generator.get('19')).toBe('aca');
    expect(generator.get('20')).toBe('acb');
    expect(generator.get('21')).toBe('acc');
    expect(generator.get('22')).toBe('baa');
    expect(generator.get('23')).toBe('bab');
    expect(generator.get('24')).toBe('bac');
    expect(generator.get('25')).toBe('bba');
    expect(generator.get('26')).toBe('bbb');
    expect(generator.get('27')).toBe('bbc');
    expect(generator.get('28')).toBe('bca');
    expect(generator.get('29')).toBe('bcb');
    expect(generator.get('30')).toBe('bcc');
    expect(generator.get('31')).toBe('caa');
    expect(generator.get('32')).toBe('cab');
    expect(generator.get('33')).toBe('cac');
    expect(generator.get('34')).toBe('cba');
    expect(generator.get('35')).toBe('cbb');
    expect(generator.get('36')).toBe('cbc');
    expect(generator.get('37')).toBe('cca');
    expect(generator.get('38')).toBe('ccb');
    expect(generator.get('39')).toBe('ccc');
    expect(generator.get('40')).toBe('aaaa');
  });

  it('returns same classname with same key.', () => {
    expect(generator.get('1')).toBe('a');
    expect(generator.get('1')).toBe('a');
  });

  it('persists the prefix when prefix is specified.', () => {
    const prefix = 'prefix-';
    expect(generator.withPrefix(prefix)).toBe(generator);
    expect(generator.getPrefix()).toBe(prefix);
  });

  it('returns the generated output with prefix when prefix is specified.', () => {
    const prefix = 'prefix-';
    generator.withPrefix(prefix);
    expect(generator.get('1')).toBe(`${prefix}a`);
    expect(generator.get('2')).toBe(`${prefix}b`);
  });

  it('keeps prefix as part of state.', () => {
    expect(generator.withPrefix('prefix-1-').get('1')).toBe('prefix-1-a');
    expect(generator.withPrefix('prefix-2-').get('2')).toBe('prefix-2-b');
    expect(generator.withPrefix('prefix-2-').get('1')).toBe('prefix-1-a');
    expect(generator.withPrefix('prefix-1-').get('2')).toBe('prefix-2-b');
  });
});
