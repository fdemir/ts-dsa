class HashTable<T> {
  private readonly LOAD_FACTOR = 0.75;

  table: [string, T][][] = Array(3);
  numItems = 0;

  get length() {
    return this.numItems;
  }

  // TODO: move it to the seperate place and implement a better hash function, prevent collision
  private hash(key: string, tableLength: number): number {
    // ???
    let hash = 17;

    for (let i = 0; i < key.length; i++) {
      hash = (13 * hash * key.charCodeAt(i)) % tableLength;
    }
    return hash;
  }

  private resize() {
    const newTable = Array(this.table.length * 2);
    this.table.forEach((bucket) => {
      if (bucket) {
        bucket.forEach(([key, value]) => {
          this.addItem(key, value, this.table);
        });
      }
    });

    this.table = newTable;
  }

  /**
   * Common logic for adding an item to the table.
   */
  private addItem(key: string, value: T, targetTable: [string, T][][]) {
    const id = this.hash(key, targetTable.length);

    if (targetTable[id]) {
      targetTable[id].push([key, value]);
    } else {
      targetTable[id] = [[key, value]];
    }
  }

  setItem(key: string, value: T) {
    const loadFactor = this.numItems / this.table.length;

    if (loadFactor > this.LOAD_FACTOR) {
      this.resize();
    }

    const id = this.hash(key, this.table.length);

    this.addItem(key, value, this.table);

    this.numItems++;
  }

  getItem(key: string): T | undefined {
    const id = this.hash(key, this.table.length);

    if (!this.table[id]) {
      return undefined;
    }

    return this.table[id].find(([k]) => k === key)?.[1];
  }

  removeItem(key: string) {
    const id = this.hash(key, this.table.length);

    if (!this.table[id]) {
      return;
    }

    this.table[id] = this.table[id].filter(([k]) => k !== key);
    this.numItems--;
  }
}

export { HashTable };
