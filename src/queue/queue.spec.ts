import { Queue } from "./queue";

describe("Queue", () => {
  let queue: Queue<string>;

  beforeEach(() => {
    queue = new Queue();
  });

  it("empty", () => {
    expect(queue.size).toBe(0);
    expect(queue.isEmpty).toBe(true);
  });

  it("enqueue", () => {
    queue.enqueue("TEST");
    expect(queue.size).toBe(1);
    queue.enqueue("FOO");
    expect(queue.size).toBe(2);
  });

  it("dequeue", () => {
    preEnqueue(queue);
    expect(queue.dequeue()).toBe("Furkan");
    expect(queue.dequeue()).toBe("Ayzer");
    expect(queue.dequeue()).toBe("Batuhan");
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.isEmpty).toBe(true);
    expect(queue.size).toBe(0);
  });

  it("clear", () => {
    preEnqueue(queue);
    queue.clear();
    expect(queue.isEmpty).toBe(true);
    expect(queue.size).toBe(0);
  });

  const preEnqueue = (q: Queue<string>) => {
    q.enqueue("Furkan");
    q.enqueue("Ayzer");
    q.enqueue("Batuhan");
  };
});
