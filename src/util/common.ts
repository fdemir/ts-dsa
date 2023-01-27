export class SinglyListNode<T> {
  public next: SinglyListNode<T> | null = null;

  public value: T | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

export class DoublyListNode<T> extends SinglyListNode<T> {
  public prev: DoublyListNode<T> | null = null;
}
