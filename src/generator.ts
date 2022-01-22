const classNameCharset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class SequentialClassnameGenerator {
  private map = new Map<string, string>();

  constructor(private charset = classNameCharset) {}

  get(key: string): string {
    if (this.map.has(key)) {
      return this.map.get(key)!;
    }
    const encoded = this.encode(this.count);
    this.map.set(key, encoded);

    return encoded;
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
