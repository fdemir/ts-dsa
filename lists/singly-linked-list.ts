/**
 * Linked lists can be thought of from a high level perspective as being a series of nodes.
 * Each node has at least a single pointer to the next node, and in the
 * last node’s case a null pointer representing that there are no more nodes in the
 * linked list.
 */

//  1. Insertion is O(1)
//  2. Deletion is O(n)
//  3. Searching is O(n)

// 1. the list is dynamically resized, thus it incurs no copy penalty like an array
// or vector would eventually incur; and
// 2. insertion is O(1).

// Singly linked list: a list where elements have only a reference to next element
// Doubly linked list: a list where elements are linked to both next and previous elements

// - Singly Linked List -

interface ILinkedList<T> {
  add(data: T): MyNode<T>;
  deleteNode(node: MyNode<T>): void;
  display(): void;
}

class MyNode<T> {
  public next: MyNode<T> | null = null;
  constructor(public value: T) {}
}

class LinkedList<T> implements ILinkedList<T> {
  private head: MyNode<T> | null = null;
  private tail: MyNode<T> | null = null;
  private length: number = 0;

  add(data: T): MyNode<T> {
    const node = new MyNode(data);

    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      // @ts-ignore
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  deleteNode(node: MyNode<T>): void {
    // NEEDS TO BE IMPLEMENTED
  }

  display(): void {
    let list = this.head;
    while (list) {
      console.log(list.value);
      list = list.next;
    }
  }
}
