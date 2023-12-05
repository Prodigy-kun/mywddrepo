import productDetails from "./productDetails.mjs";
import { getParam } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";
loadHeaderFooter();
const productId = getParam("product");
productDetails(productId);
// console.log(productId);
