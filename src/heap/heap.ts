// note: going to be naive implementation, will make it better

/**
 * Todo: We need a sugar implementation for providing easy usage. It would be MinHeap and MaxHeap.
 * The developer should apply a comparator function in the current implementation.
 */

class Heap {
  private _list: any[] = [];

  constructor(public comparator: (prev: any, next: any) => -1 | 1 | 0) {}

  insert(node: any) {
    if (!node) {
      return;
    }

    this._list.push(node);

    this._list.sort(this.comparator);
  }

  peek() {
    return this._list[0];
  }

  pop() {
    return this._list.pop();
  }

  isEmpty() {
    return this._list.length === 0;
  }

  clear() {
    this._list = [];
  }

  get size() {
    return this._list.length;
  }
}

export { Heap };
