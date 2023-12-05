import { renderListWithTemplate } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
export function renderCartContent(key, selector) {
  const cartData = getLocalStorage(key);
  // console.log(cartData);
  renderListWithTemplate(shoppingCartTemplate, selector, cartData);
}
function shoppingCartTemplate(product) {
  return `<li class="cart-card divider">
    <a href="#">
    <img src="${product.Images.PrimarySmall}" alt="${product.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${product.Name}</h2>
    </a>
    <p class="cart-card__color">${product.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${product.FinalPrice}</p>
  </li>`;
}
