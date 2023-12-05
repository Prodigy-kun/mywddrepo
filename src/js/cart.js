import { renderCartContent } from "./shoppingCart.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { displayFinalPrice } from "./utils.mjs";
loadHeaderFooter();
renderCartContent("so-cart", ".product-list");
displayFinalPrice(".product-list", ".cart-total span");
