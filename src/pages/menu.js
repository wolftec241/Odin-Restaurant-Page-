
function loadMenu(){
    const Content = document.getElementById("content");
    const Title = document.createElement("h2");
    const Description = document.createElement("p");

    Title.textContent = "Welcome to Pancake house menu";
    Description.textContent = "The Pancake House menu is all a tribute to the classic American diner of the 1950s and 1960s. The use of fresh raw materials and the maintenance of quality are already in our spirit today.";

    removeAllChildNodes(Content);

    Content.appendChild(Title);
    Content.appendChild(Description);

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



export default loadMenu;