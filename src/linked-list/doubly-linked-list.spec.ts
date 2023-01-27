import { DoublyListNode } from "../util/common";
import { DoublyLinkedList } from "./doubly-linked-list";

describe("Doubly Linked List", () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it("adds one and gets the head", () => {
    let nodeValue = 1024;

    list.add(nodeValue);

    expect(list.head?.value).toBe(nodeValue);
  });

  it("adds nodes and gets the tail", () => {
    let A = 512;
    let B = 256;
    let C = 128;

    list.add(A);
    list.add(B);
    list.add(C);

    expect(list.tail?.value).toBe(C);
  });

  it("reverse traverses", () => {
    let A = 512;
    let B = 256;

    list.add(A);
    list.add(B);

    expect(list.reverseTraverse()).toEqual([B, A]);
  });
});
