import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartsMount } from "carts/CartShow";

productsMount(document.querySelector("#dev-products"));
cartsMount(document.querySelector("#dev-carts"));
