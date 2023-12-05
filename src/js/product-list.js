import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { getParam } from "./utils.mjs";
const categoryData = getParam("category");
productList(categoryData, ".product-list");

loadHeaderFooter();
