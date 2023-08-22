import { assertEquals, beforeEach, describe, it } from "../deps.ts";
import { Queue } from "./queue.ts";

describe("Queue", () => {
  let queue: Queue<string>;

  beforeEach(() => {
    queue = new Queue();
  });

  it("empty", () => {
    assertEquals(queue.size, 0);
    assertEquals(queue.isEmpty, true);
  });

  it("enqueue", () => {
    queue.enqueue("TEST");
    assertEquals(queue.size, 1);
    queue.enqueue("FOO");
    assertEquals(queue.size, 2);
  });

  it("dequeue", () => {
    preEnqueue(queue);
    assertEquals(queue.dequeue(), "Furkan");
    assertEquals(queue.dequeue(), "Ayzer");
    assertEquals(queue.dequeue(), "Batuhan");
    assertEquals(queue.dequeue(), undefined);
    assertEquals(queue.isEmpty, true);
    assertEquals(queue.size, 0);
  });

  it("clear", () => {
    preEnqueue(queue);
    queue.clear();
    assertEquals(queue.isEmpty, true);
    assertEquals(queue.size, 0);
  });

  const preEnqueue = (q: Queue<string>) => {
    q.enqueue("Furkan");
    q.enqueue("Ayzer");
    q.enqueue("Batuhan");
  };
});
