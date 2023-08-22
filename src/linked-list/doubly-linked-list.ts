import { DoublyListNode as ListNode } from "../util/common.ts";

// This file only contains major differences between singly linked list.
export class DoublyLinkedList<T> {
  public head: ListNode<T> | null = null;
  public tail: ListNode<T> | null = null;

  add(value: T): ListNode<T> {
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

    return n;
  }

  delete(node: ListNode<T>): void {
    if (node.prev) {
      // @ts-ignore
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
      // @ts-ignore
      arr.push(current.value);
      current = current.prev;
    }

    return arr;
  }

  moveFront(node: ListNode<T>) {
    if (node.prev) {
      const prevNode = node.prev as unknown as ListNode<T>;

      prevNode.next = node.next;
      node.next = this.head;
      this.head = node;
    }
  }

  removeTail(): void {
    this.tail = null;
  }

  unshift(value: T) {
    let node = new ListNode(value);
    this.moveFront(node);
    return node;
  }
}
