import { Heap } from "./heap";

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
    expect(myHeap.isEmpty()).toBe(true);
  });

  it("inserts new node", () => {
    addExampleNodes(myHeap);

    expect(myHeap.isEmpty()).toBe(false);
    expect(myHeap.size).toBe(3);
  });

  it("peeks and retrieve the urgent task", () => {
    addExampleNodes(myHeap);
    let urgent = myHeap.peek();

    expect(urgent.task).toBe("work");
  });
});