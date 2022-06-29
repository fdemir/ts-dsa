// This file only contains major differences between singly linked list.

class ListNode<T> {
  public next: ListNode<T> | null = null;
  public prev: ListNode<T> | null = null;
  constructor(public value: T) {}
}

class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;

  add(value: T): void {
    const n = new ListNode<T>(value);

    if (!this.head) {
      this.head = n;
      this.tail = n;
    } else {
      n.prev = this.tail;
      // @ts-ignore
      this.tail.next = n;
      this.tail = n;
    }
  }

  delete(node: ListNode<T>): void {
    if (node.prev) {
      this.head = node.next;
    } else {
      const prevNode = node.prev as unknown as ListNode<T>;

      prevNode.next = node.next;
    }
  }

  reverseTraverse(): T[] {
    let current = this.tail;
    const arr: T[] = [];

    while (current) {
      arr.push(current.value);
      current = current.prev;
    }

    return arr;
  }
}
