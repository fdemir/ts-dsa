import { Stack } from "./stack";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });

  it("empty stack", () => {
    expect(stack.size).toBe(0);
    expect(stack.isEmpty).toBe(true);
  });

  it("push", () => {
    stack.push(1);
    expect(stack.size).toBe(1);
    stack.push(2);
    expect(stack.size).toBe(2);
  });

  it("pop", () => {
    prePush(stack);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
    expect(stack.isEmpty).toBe(true);
    expect(stack.size).toBe(0);
  });

  it("peek", () => {
    prePush(stack);
    expect(stack.peek()).toBe(3);
  });

  it("clear", () => {
    prePush(stack);
    stack.clear();
    expect(stack.isEmpty).toBe(true);
    expect(stack.size).toBe(0);
  });

  const prePush = (s: Stack<number>, count: number = 3) => {
    for (let index = 1; index <= count; index++) {
      s.push(index);
    }
  };
});
