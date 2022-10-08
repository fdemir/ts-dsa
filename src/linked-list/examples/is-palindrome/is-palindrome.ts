/**
 * Cracking the Coding Interview -> 2.6
 */

import { LinkedList } from "../../singly-linked-list";

function isPalindrome(list: LinkedList<any>) {
  let stack: any[] = [];
  let current = list.head;

  while (current != null) {
    stack.push(current.value);
    current = current.next;
  }

  if (stack != stack.reverse()) {
    return false;
  }

  let pointer_a = 0;
  let pointer_b = stack.length - 1;

  while (pointer_a <= pointer_b) {
    if (stack[pointer_a] != stack[pointer_b]) {
      return false;
    }
    pointer_a++;
    pointer_b--;
  }

  return true;
}

export { isPalindrome };
