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
  add(data: T): ListNode<T>;
  delete(node: ListNode<T>): void;
  search(comparator: (data: T) => boolean): ListNode<T> | null;
  traverse(): T[];
  display(): void;
}

class ListNode<T> {
  public next: ListNode<T> | null = null;
  constructor(public value: T) {}
}

class LinkedList<T> implements ILinkedList<T> {
  private head: ListNode<T> | null = null;
  private length: number = 0;

  add(data: T): ListNode<T> {
    const node = new ListNode(data);

    if (!this.length) {
      this.head = node;
    } else {
      // @ts-ignore
      this.head.next = node;
    }

    this.length++;

    return node;
  }

  search(comparator: (data: T) => boolean): ListNode<T> | null {
    const checkNext = (node: ListNode<T>): ListNode<T> | null => {
      if (comparator(node.value)) {
        return node;
      }

      return node.next ? checkNext(node.next) : null;
    };

    return this.head ? checkNext(this.head) : null;
  }

  delete(node: ListNode<T>): void {
    // NEEDS TO BE IMPLEMENTED
  }

  display(): void {
    let list = this.head;
    while (list) {
      console.log(list.value);
      list = list.next;
    }
  }

  public traverse(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }

    const addToArray = (node: ListNode<T>): T[] => {
      array.push(node.value);
      return node.next ? addToArray(node.next) : array;
    };
    return addToArray(this.head);
  }
}

const example = new LinkedList();

example.add(20);
example.add(230);
