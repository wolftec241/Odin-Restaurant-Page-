
// Create all elements for content
const Content = document.getElementById("content");
const Title = document.createElement("h1");
const Main = document.createElement("div");
const Footer = document.createElement("footer");


function homePage(){
    Title.textContent = "My restaurant";
    Main.textContent = "bla ";
    Footer.textContent = "Copyright © The Odin Project 2024";
}

function menuPage(){
    Title.textContent = "My restaurant";
    Main.textContent = "bla  bla";
    Footer.textContent = "Copyright © The Odin Project 2024";
}

function aboutPage(){
    Title.textContent = "My restaurant";
    Main.textContent = "bla bla bla";
    Footer.textContent = "Copyright © The Odin Project 2024";
}

function main(){
    const HomeBtn = document.getElementById("homeBtn")
    const menuBtn = document.getElementById("menuBtn")
    const aboutBtn = document.getElementById("aboutBtn")
    //Adding classes for elements
    Title.classList.add("title");
    Main.classList.add("main");

    //Adding new elements to Content
    Content.appendChild(Title);
    Content.appendChild(Main);
    Content.appendChild(Footer);

    menuPage();

    HomeBtn.addEventListener('click', homePage);
    menuBtn.addEventListener('click', menuPage);
    aboutBtn.addEventListener('click', aboutPage);
}

main();