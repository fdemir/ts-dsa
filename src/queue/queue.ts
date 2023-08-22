export class Queue<T> {
  private _queue: Record<number, T> = {};
  private _front: number = 0;
  private _rare: number = 0;

  get isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this._rare - this._front;
  }

  enqueue(value: T): void {
    this._queue[this._rare] = value;
    this._rare++;
  }

  dequeue(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }
    const value = this._queue[this._front];
    delete this._queue[this._front];
    this._front++;

    return value;
  }

  clear() {
    this._queue = {};
    this._rare = 0;
    this._front = 0;
  }
}
