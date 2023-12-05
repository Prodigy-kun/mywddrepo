// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const parameter = urlParams.get(param);
  return parameter;
}
let finalPrice = 0;
export function renderListWithTemplate(
  templateFn,
  parentElem,
  list,
  position = "afterbegin",
  clear = false
) {
  if (clear) {
    parentElem.innerHTML = "";
  }

  list.forEach((listItem) => {
    finalPrice += listItem.FinalPrice;
    let htmlFormat = templateFn(listItem);
    document.querySelector(parentElem).insertAdjacentHTML(position, htmlFormat);
  });
  // console.log(finalPrice);
}
export async function renderWithTemplate(
  templateFn,
  parentElem,
  data,
  callback,
  position = "afterbegin",
  clear = false
) {
  if (clear) {
    parentElem.innerHTML = "";
  }
  const htmlFormat = await templateFn();
  parentElem.insertAdjacentHTML(position, htmlFormat);
  if (callback) {
    callback(data);
  }
}
function loadTemplate(path) {
  return async function () {
    const res = await fetch(path);
    if (res.ok) {
      const data = await res.text();
      return data;
    }
  };
}

export function loadHeaderFooter() {
  const headerTemplateFn = loadTemplate("/partials/header.html");
  const footerTemplateFn = loadTemplate("/partials/footer.html");
  const headerEl = document.getElementById("main-header");
  const footerEl = document.getElementById("main-footer");
  renderWithTemplate(headerTemplateFn, headerEl);
  renderWithTemplate(footerTemplateFn, footerEl);
}
export function displayFinalPrice(listEl, parentEl) {
  const productList = document.querySelector(listEl);
  const parentDiv = document.querySelector(".cart-footer");
  // console.log(productList);
  if (productList.innerHTML !== "") {
    parentDiv.classList.remove("hide");
    document.querySelector(parentEl).innerText = finalPrice.toFixed(2);
  }
}
