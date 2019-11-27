import { header, nav, main, footer } from "./components";
import * as state from "./store";
// import { about, blog, contact, home } from "./components/views";

function render(state) {
        document.querySelector('#root').innerHTML = `
        ${header(state)}
        ${nav(state)}    
        ${main(state)}   
        ${footer(state)}
`;
}
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

            