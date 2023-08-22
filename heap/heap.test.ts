import { assertEquals } from "https://deno.land/std@0.199.0/assert/assert_equals.ts";
import { beforeEach, describe, it } from "../deps.ts";
import { Heap } from "./heap.ts";

function addExampleNodes(targetHeap: Heap) {
  targetHeap.insert({
    priority: 3,
    task: "clean",
  });
  targetHeap.insert({
    priority: 20,
    task: "work",
  });
  targetHeap.insert({
    priority: 5,
    task: "sleep",
  });
}

describe("Heap", () => {
  let myHeap: Heap;

  beforeEach(() => {
    myHeap = new Heap((a, b) => {
      if (a.priority > b.priority) {
        return -1;
      }

      if (a.priority > b.priority) {
        return 1;
      }

      return 0;
    });
  });

  it("is empty", () => {
    assertEquals(myHeap.isEmpty(), true);
  });

  it("inserts new node", () => {
    addExampleNodes(myHeap);

    assertEquals(myHeap.isEmpty(), false);
    assertEquals(myHeap.size, 3);
  });

  it("not inserts the empty node", () => {
    myHeap.insert(null);

    assertEquals(myHeap.isEmpty(), true);
  });

  it("size is 3", () => {
    addExampleNodes(myHeap);

    assertEquals(myHeap.size, 3);
  });

  it("peeks and retrieve the urgent task", () => {
    addExampleNodes(myHeap);
    const urgent = myHeap.peek();

    assertEquals(urgent.task, "work");
  });

  it("pops and retrieve the unimportant task", () => {
    addExampleNodes(myHeap);
    const unimportant = myHeap.pop();

    assertEquals(unimportant.task, "clean");
  });

  it("clears the heap", () => {
    addExampleNodes(myHeap);
    myHeap.clear();

    assertEquals(myHeap.isEmpty(), true);
  });
});
