# Queue

A queue is an abstract data type that holds an ordered, linear sequence of
items. You can describe it as a first in, first out (FIFO) structure; the first
element to be added to the queue will be the first element to be removed from
the queue. New elements are added to the back or rear of the queue. When an
element is removed, the remaining elements do not move up to take the empty
space. To keep the order of the queue you need to maintain a pointer to the
front, which indicates the element at the front of the queue, and one to the
rear, which indicates the element at the back of the queue.

A priority queue is one where each element in the queue has a priority. When new
elements are added to the queue, they are inserted ahead of those of lower
priority and behind elements of equal priority. A real world example would be a
queue in the school canteen. Students join the queue at the end of the line of
other students but prefects can join ahead of students, but behind other
prefects.s.

![Queue](https://isaaccomputerscience.org/api/v2.22.2/api/images/content/computer_science/data_structures_and_algorithms/data_structures/figures/Isaac_Computer_Science_2_Data_Structures_Project_OUTLINE_V6_18.png)

## Implementation

The main operations on a queue are:

- enqueue(data): add an element to the queue
- dequeue(): return an element from the front of the queue
- clear(): removes all the element in the queue
- isEmpty: check if the queue is empty
- size: checks the size of the queue

## Reference

- [Wikipedia](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
- [Isaac Computer Science](https://isaaccomputerscience.org/concepts/dsa_datastruct_queue?examBoard=all&stage=all&topic=data_structures)
