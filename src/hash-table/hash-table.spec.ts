import { HashTable } from "./hash-table";

describe("Hash Table", () => {
  let table: HashTable<string>;

  beforeEach(() => {
    table = new HashTable();
  });

  it("should be empty", () => {
    expect(table.length).toStrictEqual(0);
  });

  it("adds one item with key", () => {
    let key = "color";
    let subject = "red";

    table.setItem(key, subject);

    expect(table.getItem(key)).toEqual(subject);
  });

  it("adds multiple items ", () => {
    table.setItem("color", "red");
    table.setItem("name", "Jack");
    table.setItem("surname", "Doe");
    table.setItem("city", "Antalya");

    expect(table.length).toEqual(4);
  });

  it("removes item", () => {
    table.setItem("color", "blue");
    table.removeItem("color");
    expect(table.getItem("color")).toBeUndefined();
  });
});
