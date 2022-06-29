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
    console.log(linkedList.traverse());
  });

  it("traversal", () => {
    const numbers = [1, 2];
    numbers.forEach((value) => linkedList.add(value));

    expect(linkedList.traverse()).toEqual(numbers);
    expect(linkedList.size).toBe(numbers.length);
    expect(linkedList.isEmpty).toBe(false);
  });
});
