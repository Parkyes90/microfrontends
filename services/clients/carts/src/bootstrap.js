import faker from "faker";

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.querySelector("#dev-carts").innerHTML = cartText;
const mount = (el) => {
  el.innerHTML = `<div>You have ${faker.random.number()} items in your cart</div>`;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-carts");
  if (el) {
    mount(el);
  }
}

export { mount };
