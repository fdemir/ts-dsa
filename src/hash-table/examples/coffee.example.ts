import { HashTable } from "../hash-table.ts";

type CoffeeTypes = "Arabica" | "Robusta" | "Excelsa" | "Liberica";
type Size = "sm" | "lg" | "xl";

interface Shop {
  name: string;
  location: [number, number];
  size: Size;
}

interface CoffeeShop extends Shop {
  types: CoffeeTypes[];
}

const myFavoriteCofeeShops = new HashTable<CoffeeShop>();

myFavoriteCofeeShops.setItem("starbucks", {
  name: "Starbucks",
  location: [37.78825, -122.4324],
  size: "sm",
  types: ["Arabica", "Robusta", "Excelsa", "Liberica"],
});
