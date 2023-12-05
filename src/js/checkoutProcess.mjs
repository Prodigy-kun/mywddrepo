import { getLocalStorage } from "./utils.mjs";

const checkoutprocess = {
  key: "",
  outputSelector: "",
  list: [],
  itemTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: "",
  init: function (key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = getLocalStorage(key);
    this.calculateItemSummary();
  },
  calculateItemSummary: function () {
    this.list.forEach((listItem) => {
      this.itemTotal += listItem.FinalPrice;
    });
    document.querySelector(this.outputSelector + " .subcount").innerText =
      this.list.length;
    document.querySelector(this.outputSelector).innerText = this.itemTotal;
  },
  calculateOrderTotal: function () {
    this.shipping = 10 + (this.list.length - 1) * 2;
    this.tax = 0.06 * this.itemTotal;
    this.orderTotal = this.itemTotal + this.shipping + this.tax;
    this.displayOrderTotals();
  },
  displayOrderTotals: function () {
    document.querySelector(".estimate").innerText = this.shipping;
    document.querySelector(".tax").innerText = this.tax;
  },
};
export default checkoutprocess;
