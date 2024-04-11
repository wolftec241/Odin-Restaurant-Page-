function loadHome() {
    const Content = document.getElementById("content");
    const Title = document.createElement("h2");
    const Description = document.createElement("p");

    Title.textContent = "Welcome to Pancake house";
    Description.textContent = "The Pancake House menu is all a tribute to the classic American diner of the 1950s and 1960s. The use of fresh raw materials and the maintenance of quality are already in our spirit today.";

    Title.classList.add("home-title");
    Description.classList.add("home-description");
    

    removeAllChildNodes(Content);

    Content.appendChild(Title);
    Content.appendChild(Description);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export default loadHome;
