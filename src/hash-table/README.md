# Hash Table

A hash table is a data structure that implements an associative array
(dictionary). In an associative array, data is stored as a collection of
key-value pairs. The position of the data within the array is determined by
applying a hashing algorithm to the key - a process called hashing. The hashing
algorithm is called a hash function.

## Collision

A collision occurs when the hash function produces the same hash value for two
or more keys.

![hash table collision](/assets/hash-table-collision.png)

In the above example, the hash function produces the same hash value for both
keys. Collisions are a real problem when using a hash table because you cannot
store two sets of data at the same location.

There are many ways to resolve collisions.

### Linear Probing (also called open addressing)

When a key creates a hash value that references a position that is already
occupied, you must place the data in the next free position in the hash table.

![linear probing](/assets/hash-table-linear-probing.png)

As location 0 is already occupied, the data with the key 60 will be placed in
the next free bucket in the hash table. The interval is 1 so the next bucket
(index 1) will be examined. This is already occupied, so the next bucket
(index 2) is examined. This is empty so the data will be placed in this
location.

### Chaining (also called closed addressing

Another way of dealing with collisions is to use linked lists. Instead of
storing the actual data in the hash table, you store a pointer to a location
where the data is stored. Each data item is stored as a node with three
attributes:

- the key value
- the data
- a pointer to the next node

When AC2K is hashed, the bucket for its hash value (also22) is inspected and
found to be occupied. The pointer for the node with the key C3NM is updated to
point to the node with the key AC2K. The node for AC2K will have its next node
pointer set to Null.

![linear probing](/assets/hash-table-chaining.png)

## References

- [https://isaaccomputerscience.org/concepts/dsa_datastruct_hash_table](https://isaaccomputerscience.org/concepts/dsa_datastruct_hash_table?examBoard=all&stage=all)
- [https://en.wikipedia.org/wiki/Hash_table](https://en.wikipedia.org/wiki/Hash_table)
