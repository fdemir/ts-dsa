import { LinkedList } from "./singly-linked-list";

describe("Singly Linked List", () => {
  let linkedList: LinkedList<number>;

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
    const numbers = [1, 2, 3, 4];
    numbers.forEach((value) => linkedList.add(value));

    expect(linkedList.traverse()).toEqual(numbers);
    expect(linkedList.size).toBe(numbers.length);
    expect(linkedList.isEmpty).toBe(false);
  });

  it("reverses", () => {
    const numbers = [2, 4, 6, 8];
    numbers.forEach((value) => linkedList.add(value));

    linkedList.reverse();

    const reversedLinkedListValues = Array.from(numbers).reverse();

    expect(linkedList.traverse()).toEqual(reversedLinkedListValues);
  });

  it("prints kth to last element", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach((value) => linkedList.add(value));

    expect(linkedList.printKthToLast(linkedList.head, 3)).toBe(
      numbers[numbers.length - 1]
    );
  });

  it("deletes the node", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach((value) => linkedList.add(value));

    linkedList.deleteByNode(linkedList.head?.next?.next);

    expect(linkedList.traverse()).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
  });

  it("removes the mid node", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach((value) => linkedList.add(value));

    linkedList.removeMiddleNode();

    console.log(linkedList.traverse());

    expect(linkedList.traverse()).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
  });
});
