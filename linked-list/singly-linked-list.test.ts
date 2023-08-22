import { beforeEach, describe, it, assertEquals } from "../deps.ts";
import { LinkedList } from "./singly-linked-list.ts";

describe("Singly Linked List", () => {
  let linkedList: LinkedList<number>;

  const generateLinkedList = (length: number) => {
    const numbers = Array.from({ length }, (_, i) => i);
    numbers.forEach((value) => linkedList.add(value));
    return numbers;
  };

  beforeEach(() => {
    linkedList = new LinkedList<number>();
  });

  it("empty", () => {
    assertEquals(linkedList.isEmpty, true);
    assertEquals(linkedList.size, 0);
  });

  it("push", () => {
    linkedList.add(10);
    assertEquals(linkedList.size, 1);
    assertEquals(linkedList.isEmpty, false);
  });

  it("delete", () => {
    linkedList.add(10);
    linkedList.add(20);
    linkedList.delete(20);
    assertEquals(linkedList.traverse(), [10]);
  });

  it("traversal", () => {
    const numbers = generateLinkedList(4);

    assertEquals(linkedList.traverse(), numbers);
    assertEquals(linkedList.size, numbers.length);
    assertEquals(linkedList.isEmpty, false);
  });

  it("reverses", () => {
    const numbers = generateLinkedList(4);

    linkedList.reverse();

    const reversedLinkedListValues = Array.from(numbers).reverse();

    assertEquals(linkedList.traverse(), reversedLinkedListValues);
  });

  it("prints kth to last element", () => {
    const numbers = generateLinkedList(1);

    // FIXME: ???*
    assertEquals(
      linkedList.printKthToLast(linkedList.head, 1) - 1,
      numbers[numbers.length - 1]
    );
  });

  it("deletes the node", () => {
    const numbers = generateLinkedList(9);

    console.log(numbers);

    linkedList.deleteByNode(linkedList.head?.next?.next);

    numbers.splice(2, 1);

    assertEquals(linkedList.traverse(), numbers);
  });

  it("removes the mid node", () => {
    const numbers = generateLinkedList(3);

    linkedList.removeMiddleNode();

    numbers.splice(1, 1);

    assertEquals(linkedList.traverse(), numbers);
  });
});
