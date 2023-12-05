import { getData } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";
export default async function productList(category, selector) {
  const products = await getData(category);
  const filteredProducts = products.filter(
    (product) => product.Id !== "880RT" && product.Id !== "989CG"
  );
  renderListWithTemplate(productCardTemplate, selector, filteredProducts);
}

function productCardTemplate(product) {
  return `<li class="product-card">
      <a href="../product_pages/index.html?product=${product.Id}">
        <img src="${product.Images.PrimaryMedium}" alt="${product.Name}/>
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.Name}</h2>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>`;
}
