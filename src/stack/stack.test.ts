import { assertEquals, beforeEach, describe, it } from "../deps.ts";
import { Stack } from "./stack.ts";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });

  it("empty stack", () => {
    assertEquals(stack.size, 0);
    assertEquals(stack.isEmpty, true);
  });

  it("push", () => {
    stack.push(1);
    assertEquals(stack.size, 1);
    stack.push(2);
    assertEquals(stack.size, 2);
  });

  it("pop", () => {
    prePush(stack);
    assertEquals(stack.pop(), 3);
    assertEquals(stack.pop(), 2);
    assertEquals(stack.pop(), 1);
    assertEquals(stack.pop(), undefined);
    assertEquals(stack.isEmpty, true);
    assertEquals(stack.size, 0);
  });

  it("peek", () => {
    prePush(stack);
    assertEquals(stack.peek(), 3);
  });

  it("clear", () => {
    prePush(stack);
    stack.clear();
    assertEquals(stack.isEmpty, true);
    assertEquals(stack.size, 0);
  });

  const prePush = (s: Stack<number>, count = 3) => {
    for (let index = 1; index <= count; index++) {
      s.push(index);
    }
  };
});
