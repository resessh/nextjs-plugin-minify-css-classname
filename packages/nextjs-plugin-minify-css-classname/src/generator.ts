const classNameCharset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class SequentialClassnameGenerator {
  private map = new Map<string, string>();
  private prefix = '';

  constructor(private charset = classNameCharset) {}

  withPrefix(prefix: string) {
    this.prefix = prefix;
    return this;
  }

  getPrefix() {
    return this.prefix;
  }

  get(key: string): string {
    if (this.map.has(key)) {
      return this.map.get(key)!;
    }
    const encoded = this.encode(this.count);
    const withPrefix = this.prefix + encoded;
    const result = withPrefix;

    this.map.set(key, result);

    return result;
  }

  private get count() {
    return this.map.size;
  }

  private encode(index: number): string {
    const char = this.charset[index % this.charset.length];
    if (index < this.charset.length) {
      return char;
    } else {
      // To calculate the high-order digit, we need to remove the first lower digit group.
      // [ a,  b,  c ], [ aa, ab, ac ], [ ba, bb, bc ], [ ca, cb, cc ]
      // -------------
      // ↑remove this group
      const highOrderDigitIndex = Math.floor(index / this.charset.length) - 1;
      return this.encode(highOrderDigitIndex) + char;
    }
  }
}
