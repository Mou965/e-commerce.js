import { toggleCart, addCart, getId, getPrice, deletedProduct, totalPrice} from "./DOM.js"
import { getProductShop } from "./crud.js";
import { printCart } from "./ui.js"

getProductShop();

window.toggleCart = toggleCart;
window.addCart = addCart;
window.getId = getId;
window.getPrice = getPrice;
window.printCart = printCart;
window.deletedProduct = deletedProduct;
window.totalPrice = totalPrice;
