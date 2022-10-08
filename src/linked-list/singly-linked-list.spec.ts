import { LinkedList } from "./singly-linked-list";

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
    expect(linkedList.isEmpty).toBe(true);
    expect(linkedList.size).toBe(0);
  });

  it("push", () => {
    linkedList.add(10);
    expect(linkedList.size).toBe(1);
    expect(linkedList.isEmpty).toBe(false);
  });

  it("delete", () => {
    linkedList.add(10);
    linkedList.add(20);
    linkedList.delete(20);
    expect(linkedList.traverse()).toEqual([10]);
  });

  it("traversal", () => {
    const numbers = generateLinkedList(4);

    expect(linkedList.traverse()).toEqual(numbers);
    expect(linkedList.size).toBe(numbers.length);
    expect(linkedList.isEmpty).toBe(false);
  });

  it("reverses", () => {
    const numbers = generateLinkedList(4);

    linkedList.reverse();

    const reversedLinkedListValues = Array.from(numbers).reverse();

    expect(linkedList.traverse()).toEqual(reversedLinkedListValues);
  });

  it("prints kth to last element", () => {
    const numbers = generateLinkedList(1);

    // FIXME: ???*
    expect(linkedList.printKthToLast(linkedList.head, 1) - 1).toBe(
      numbers[numbers.length - 1]
    );
  });

  it("deletes the node", () => {
    const numbers = generateLinkedList(9);

    console.log(numbers);

    linkedList.deleteByNode(linkedList.head?.next?.next);

    numbers.splice(2, 1);

    expect(linkedList.traverse()).toEqual(numbers);
  });

  it("removes the mid node", () => {
    const numbers = generateLinkedList(3);

    linkedList.removeMiddleNode();

    numbers.splice(1, 1);

    expect(linkedList.traverse()).toEqual(numbers);
  });
});
