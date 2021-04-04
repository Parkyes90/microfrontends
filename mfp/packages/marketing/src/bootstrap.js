import React from "react";
import ReactDOM from "react-dom";

// mount
const mount = (el) => {
  ReactDOM.render(<h1>Hi There</h1>, el);
};
// immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// export
export { mount };
