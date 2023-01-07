export class SinglyListNode<T> {
  public next: SinglyListNode<T> | null = null;
  constructor(public value: T) {}
}

export class DoublyListNode<T> extends SinglyListNode<T> {
  public prev: DoublyListNode<T> | null = null;
}
