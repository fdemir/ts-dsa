import { assertEquals, beforeEach, describe, it } from "../deps.ts";
import { HashTable } from "./hash-table.ts";

describe("Hash Table", () => {
  let table: HashTable<string>;

  beforeEach(() => {
    table = new HashTable();
  });

  it("should be empty", () => {
    assertEquals(table.length, 0);
  });

  it("adds one item with key", () => {
    let key = "color";
    let subject = "red";

    table.setItem(key, subject);

    assertEquals(table.getItem(key), subject);
  });

  it("adds multiple items ", () => {
    table.setItem("color", "red");
    table.setItem("name", "Jack");
    table.setItem("surname", "Doe");
    table.setItem("city", "Antalya");

    assertEquals(table.length, 4);
  });

  it("removes item", () => {
    table.setItem("color", "blue");
    table.removeItem("color");
    assertEquals(table.getItem("color"), undefined);
  });
});
