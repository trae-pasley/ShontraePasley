import { Links } from "../store";

function linksBuilder(links) {
  return links.map(link => `<li><a href="./${link}" data-navigo>${link}</a></li>`).join("");
}

export default () =>
  `<nav>
  
    <ul>
        ${linksBuilder(Links)}
      </ul>
    </nav>
`;