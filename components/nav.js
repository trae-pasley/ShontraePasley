import { Links } from "/store";

function linksBuilder(links) {
        return links.map(link => `<l><a href="./${link}" data-navigo>${link}</a></li>`).join("");
}

export default () => 

${Footer()}
`;

router.updatePageLinks();

}

router

.on(":page", params =>
        render(

         state[
         `${params.page.slice(0, 1).toUpperCase()}${params.page.
                slice(1)
                .toLowerCase()}`
         ]
     )
)

        .on("/", render())
        .resolve();
