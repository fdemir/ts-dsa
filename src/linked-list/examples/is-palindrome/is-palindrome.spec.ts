import { LinkedList } from "../../singly-linked-list";
import { isPalindrome } from "./is-palindrome";

describe("is palindrome", () => {
  it("should return true for palindrome", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(1);

    expect(isPalindrome(linkedList)).toBe(true);
  });

  it("should return false for non-palindrome", () => {
    const linkedList = new LinkedList<number>();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);

    expect(isPalindrome(linkedList)).toBe(false);
  });
});
