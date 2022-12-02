import './scss/style.scss'
import { setupCounter } from './lib/counter.js'
import javascriptLogo from './lib/javascript.svg';


const viteLink = document.createElement('a');
viteLink.setAttribute('href', "https://vitejs.dev");
viteLink.setAttribute('target', "_blank");

const viteLogo = document.createElement('img');
viteLogo.setAttribute("src", "/vite.svg");
viteLogo.setAttribute("alt", "Vite logo");
viteLogo.classList.add('logo');

viteLink.append(viteLogo);



const jsLink = document.createElement('a');
jsLink.setAttribute('href', "https://developer.mozilla.org/en-US/docs/Web/JavaScript");
jsLink.setAttribute('target', "_blank");

const jsLogo = document.createElement('img');
jsLogo.setAttribute("src", javascriptLogo);
jsLogo.setAttribute("alt", "JavaScript logo");
jsLogo.classList.add(`logo`);
jsLogo.classList.add(`vanilla`);


const heading = document.createElement('h1');
heading.textContent = "Hello Vite"


const buttonGroup = document.createElement('div');
buttonGroup.classList.add('card');

const button = document.createElement('button');
button.setAttribute('id', "counter");
button.setAttribute('type', "button");

const docsLink = document.createElement('p');
docsLink.classList.add("read-the-docs");
docsLink.innerText = "Click on the Vite logo to learn more";

viteLink.append(viteLogo);
jsLink.append(jsLogo);
buttonGroup.append(button);




const container = document.createElement('div');

container.appendChild(viteLink);
container.appendChild(jsLink);
container.appendChild(heading);
container.appendChild(buttonGroup);
container.appendChild(docsLink);

document.querySelector("#app").append(container);


// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

setupCounter(document.querySelector('#counter'))