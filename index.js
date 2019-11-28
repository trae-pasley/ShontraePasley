import { header, nav, main, footer } from "./components";
import * as state from "./store";
import { about, blog, contact, home } from "./components/mainContent";

import Navigo from "Navigo";

function render(state.home) {
        document.querySelector('#root').innerHTML = `
        ${header(st)}
        ${nav(st)}    
        ${main(st)}   
        ${footer(st)}
`;
router.updatePageLinks();
}

router.on(".page", params =>
 rende(
     state[
         `${params.page.slice(0,1).toUpperCase()}${}`
     ]
 )
 function handleNavigation(event)
 {
     const component = event.target.textContent;
     event.preventDefault();
     console.log(event.target.textContent);
     render(page[component]);
 }

 render(state);

 document.querySelector('#navigaion li:nth-child(1)> a')
        .addEventListener('click', handleNavigation);

 document.querySelector('#navigation li:nth-child(2)> a')
 .addEventListener('click', handleNavigation);

 document.querySelector('#navigation li:nth-child(3)> a')
 .addEventListener('click', handleNavigation);

     render(state);

            