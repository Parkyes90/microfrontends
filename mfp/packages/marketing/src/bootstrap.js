import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

// mount
const mount = (el, { onNavigate = () => {} } = {}) => {
  const history = createMemoryHistory();
  history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, el);
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
