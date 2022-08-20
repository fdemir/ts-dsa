import { HashTable } from "../hash-table";

class ResourceRecord {
  table: HashTable<string>;

  constructor() {
    this.table = new HashTable<string>();
  }

  register(name: string, address: string) {
    this.table.setItem(name, address);
  }

  /**
   * NOTE: there is a couple ways to do this more performant. We can use tree and divide the domain into top level domains.
   * For now, we use hash table.
   */
  lookup(name: string) {
    return this.table.getItem(name);
  }

  reverse_lookup(targetAddress: string) {
    const { table: records } = this.table;
    for (const iterator of records) {
      if (Array.isArray(iterator)) {
        for (const [name, address] of iterator) {
          if (address === targetAddress) {
            return name;
          }
        }
      }
    }
  }

  unregister(name: string) {
    this.table.removeItem(name);
  }

  update(name: string, address: string) {
    const record = this.table.getItem(name);

    if (!record) {
      throw new Error(
        `There is no record for '${name}'. Please register first.`
      );
    }

    this.table.setItem(name, address);

    return true;
  }
}

export { ResourceRecord };
