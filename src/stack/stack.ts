export class Stack<T> {
  private _stack: Record<number, T> = {};
  private _count: number = 0;

  get isEmpty() {
    return this._count == 0;
  }

  get size() {
    return this._count;
  }

  push(value: T): void {
    this._stack[this._count] = value;
    this._count++;
  }

  pop(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    this._count--;
    const value = this._stack[this._count];
    delete this._stack[this._count];
    return value;
  }

  peek(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }

    return this._stack[this._count - 1];
  }

  clear() {
    this._stack = {};
    this._count = 0;
  }
}
