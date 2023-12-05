import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "./externalServices.mjs";
import { getLocalStorage } from "./utils.mjs";
let productData = {};
export default async function productDetails(productId) {
  // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
  // once we have the product details we can render out the HTML
  // add a listener to Add to Cart button
  productData = await findProductById(productId);
  // console.log(productData);
  renderProductDetails();
  document
    .getElementById("addToCart")
    .addEventListener("click", addToCartHandler);
}

function renderProductDetails() {
  document.getElementById("productName").innerText = productData.Name;
  document.getElementById("productNameWithoutBrand").innerText =
    productData.NameWithoutBrand;
  document.getElementById("productImage").src = productData.Images.PrimaryLarge;
  document.getElementById(
    "productFinalPrice"
  ).innerText = `$${productData.FinalPrice}`;
  document.getElementById("productColorName").innerText =
    productData.Colors[0].ColorName;
  document.getElementById("productDescriptionHtml").innerHTML =
    productData.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = productData.Id;
}
function addProductToCart(product) {
  let local = getLocalStorage("so-cart") || [];
  // console.log(local);S
  // if (!Array.isArray(local)) {
  //   local = [];
  // }

  local.push(product);

  setLocalStorage("so-cart", local);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
