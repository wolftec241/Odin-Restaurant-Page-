function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function NewItem(name, description ,cost){
    const Item = document.createElement('div');
    const TextPart = document.createElement('div');
    const Name = document.createElement('h3');
    const Cost = document.createElement('p');
    const Description = document.createElement('p');

    Item.classList.add('item');
    Name.classList.add('item-name');
    Description.classList.add('item-description');
    Cost.classList.add('item-cost');

    Name.textContent = name;
    Description.textContent = description;
    Cost.textContent = cost + "$";
    TextPart.appendChild(Name);
    TextPart.appendChild(Description);
    TextPart.appendChild(Cost);
    Item.appendChild(TextPart);
    return Item;
}







function loadMenu(){
    const Content = document.getElementById("content");
    const Title = document.createElement("h2");
    const Items = document.createElement("div");

    Items.classList.add("items");

    Title.textContent = "Our Pancake Menu";


    removeAllChildNodes(Content);


    Items.appendChild(NewItem("Chocolate Peanut Butter",
     "Our homemade smooth peanut butter filling sandwiched between two chocolate pancakes. Topped with vanilla ice cream, cream then drizzled with smooth peanut butter sauce and chocolate sauce."
     , 20));
    Items.appendChild(NewItem("Lemon Meringue",
     "Buttermilk pancakes served with homemade lemon curd, topped with cream, vanilla ice cream and meringue."
     , 20));
    Items.appendChild(NewItem("Coco Berry",
     "Chocolate pancakes with coconut, cream, vanilla ice cream topped with our chocolate sauce and raspberry coulis…a perfect match."
     , 20));
    Items.appendChild(NewItem("Strawberry Patch",
     "Buttermilk pancakes with fresh strawberries, cream, vanilla ice cream and strawberry sauce."
     , 20));


    Content.appendChild(Title);
    Content.appendChild(Items);

}



export default loadMenu;