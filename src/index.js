import "./styles.css";

import { homeTab } from "./tabs/home";
import { menuTab } from "./tabs/menu";
import { aboutTab } from "./tabs/about";

/* Button elements */
const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');
const content = document.getElementById('content');
homeButton.classList.add('selected');
content.appendChild(homeTab());

const setPageTab = (e) => {
    console.log(e.target);
    content.innerHTML = '';
    homeButton.classList.remove('selected');
    menuButton.classList.remove('selected');
    aboutButton.classList.remove('selected');
    if (e.target.innerText.toLowerCase() === 'home') {
        homeButton.classList.add('selected');
        content.appendChild(homeTab());
    } else if (e.target.innerText.toLowerCase() === 'menu') {
        menuButton.classList.add('selected');
        content.appendChild(menuTab());
    } else {
        aboutButton.classList.add('selected');
        content.appendChild(aboutTab());
    }
}

homeButton.onclick = setPageTab;
menuButton.onclick = setPageTab;
aboutButton.onclick = setPageTab;