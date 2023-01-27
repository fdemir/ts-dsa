import { LRUCache } from "./lru-cache";

const DEFAULT_CACHE_CAPACITY = 3;

describe("LRU Cache", () => {
  let cache;

  beforeEach(() => {
    cache = new LRUCache(DEFAULT_CACHE_CAPACITY);
  });

  it("is empty", () => {
    expect(cache.isEmpty).toBe(true);
  });

  it("sets and gets the value", () => {
    let targetKey = "A";
    let value = 27;

    cache.set(targetKey, value);

    expect(cache.get(targetKey)).toBe(value);
  });

  it("does not allow zero cache size", () => {
    expect(new LRUCache(0)).toThrowError();
  });

  it("cannot pull null key", () => {
    cache.set(null, "0").toThrowError();
  });

  it("throws error when trying to get the null key", () => {
    cache.get(null, "0").toThrowError();
  });

  it("if the key does not exist return null", () => {
    expect(cache.get("abc")).toBeNull();
  });

  it("clears", () => {
    let targetKey = "A";
    let targetValue = "x";
    cache.set(targetKey, targetValue);
    cache.clear();

    expect(cache.get(targetKey)).toBeNull();
    expect(cache.isEmpty).toBe(true);
  });

  it("when the max size of the cache is reached remove the least recently used key", () => {});
});
