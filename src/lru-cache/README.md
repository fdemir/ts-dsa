# LRU Cache

LRU cache is a data structure that stores a list of items in a way that the most recently used item is always at the front of the list.

It uses an Hashmap to store the key-value pairs and a doubly linked list to store the keys in the order of their use.

### Usage

```js
import LRUCache from "./lru-cache";
const cache = new LRUCache(3);

cache.set("a", 1);
cache.set("b", 2);
cache.get("a"); // 1
cache.set("c", 3);
cache.get("b"); // undefined
cache.set("d", 4);
cache.get("a"); // undefined
```

### Costs

| Operation         | Worst Case |
| ----------------- | ---------- |
| space             | O(n)       |
| acess item        | O(1)       |
| get recently used | O(1)       |
