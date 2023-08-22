import { assertEquals, beforeEach, describe, it } from "../deps.ts";
import { DoublyLinkedList } from "./doubly-linked-list.ts";

describe("Doubly Linked List", () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it("adds one and gets the head", () => {
    const nodeValue = 1024;

    list.add(nodeValue);

    assertEquals(list.head?.value, nodeValue);
  });

  it("adds nodes and gets the tail", () => {
    const A = 512;
    const B = 256;
    const C = 128;

    list.add(A);
    list.add(B);
    list.add(C);

    assertEquals(list.tail?.value, C);
  });

  it("reverse traverses", () => {
    const A = 512;
    const B = 256;

    list.add(A);
    list.add(B);

    assertEquals(list.reverseTraverse(), [B, A]);
  });

  it("move front", () => {
    const A = 512;
    const B = 256;
    const C = 128;

    list.add(A);
    const targetNode = list.add(B);
    list.add(C);

    list.moveFront(targetNode);

    assertEquals(list.head?.value, B);
  });

  it("remove tail", () => {
    let A = 512;
    let B = 256;
    let C = 128;

    list.add(A);
    list.add(B);
    list.add(C);

    list.removeTail();

    assertEquals(list.tail, null);
  });
});
