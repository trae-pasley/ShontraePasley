import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(location.origin);

function render(st = state.Home) {
  console.log("st", st);
    document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav()}
    ${Main(st)}
    ${Footer()}
`;

document.querySelector(".fa-hamburger").addEventListener("click", () => {
  // hiddenUL.classList.remove("is-hidden--mobile");
  document.querySelector("ul").classList.toggle("is-hidden--mobile");
});
  router.updatePageLinks();
}


router
  .on(":page", params => render(state[capitalize(params.page)]))
  .on("/", () => render())
  .resolve();