import { assertEquals, describe, it } from "../../../deps.ts";
import { LinkedList } from "../../singly-linked-list.ts";
import { isPalindrome } from "./is-palindrome.ts";

describe("is palindrome", () => {
  it("should return true for palindrome", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(1);

    assertEquals(isPalindrome(linkedList), true);
  });

  it("should return false for non-palindrome", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);

    assertEquals(isPalindrome(linkedList), false);
  });
});
