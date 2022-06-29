class ListNode<T> {
  public next: ListNode<T> | null = null;
  constructor(public value: T) {}
}

export class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private length: number = 0;

  get isEmpty() {
    return this.length === 0;
  }

  get size() {
    return this.length;
  }

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

  delete(data): void {
    let current = this.head;

    if (!this.length) {
      return;
    }

    if (current?.value == data) {
      this.head = current?.next || null;
    } else if (current?.next) {
      while (current?.next && current?.next?.value != data) {
        current = current?.next;
      }

      if (current.next) {
        current.next = current?.next?.next;
      }
    }
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
