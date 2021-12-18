function handle_click(item_json) {
// Setting cookies in 5 steps - get cookies, parse cookies, push to array, stringify cookies and set them.
    var selected_item_json = Cookies.get("selected_item");
    var selected_clothes = JSON.parse(selected_item_json);
    var item = JSON.parse(item_json);
    selected_clothes.push(item);
    selected_clothes_json = JSON.stringify(selected_clothes);
    Cookies.set("selected_item", selected_clothes_json);
    
}


function add_menu_item(item) {
    // Selecting a parent container for the article
        var parent_containter = document.getElementById("menu_container");
    // Setting up a variable and assigning a tag to it
        var menu_card = document.createElement("article");
    // Assgning a class to new element
        menu_card.classList.add("card_container");
        var item_json = JSON.stringify(item);
        menu_card.setAttribute('onclick', `handle_click('${item_json}')`);
        //menu_card['onclick'] = handle_click;
     
        var card_image = document.createElement("img");
        card_image.src = item.image_src;
    
        var card_title = document.createElement("h3");
        card_title.innerText = item.name;
    
        var card_description = document.createElement('p');
        card_description.innerText = item.description;
    
        var card_price = document.createElement('h5');
        card_price.innerText = item.price;
    
        menu_card.appendChild(card_image);
        menu_card.appendChild(card_title);
        menu_card.appendChild(card_description);
        menu_card.appendChild(card_price);
        parent_containter.appendChild(menu_card);
    
    }

var menu_items = [
    {
        name: "Waffle-Knit Turtleneck T-Shirt",
        description: "Soft waffle-knit thermal chunky shirt",
        image_src: "../images/1.jpg",
        price: "CA$69.95"
    },
    {
        name: "Waffle Crewneck Sweater",
        description: "Soft waffle-knit sweater",
        image_src: "../images/2.jpg",
        price: "CA$84.95"
    },
    {
        name: "Ribbed Turtleneck T-Shirt",
        description: "Soft ribbed knit",
        image_src: "../images/3.jpg",
        price: "CA$49.95"
    },
    {
        name: "Modern Boatneck T-Shirt",
        description: "Softest Supima® cotton and modal knit",
        image_src: "../images/4.jpg",
        price: "CA$29.95"
    },
    {
        name: "Gap X Jean-Michel Basquiat Graphic Long Sleeve T-Shirt",
        description: "Estate of Jean-Michel Basquiat. Licensed by Artestar, New York.",
        image_src: "../images/5.jpg",
        price: "CA$54.95"
    },
    {
        name: "100% Recycled Polyesterpwd Cropped Puffer Jacket",
        description: "This jacket is made with 100% recycled polyester. Less waste in the world",
        image_src: "../images/6.jpg",
        price: "CA$178.00"
    },
    {
        name: "Vintage Soft Crewneck Sweatshirt",
        description: "Soft french-terry knit",
        image_src: "../images/7.jpg",
        price: "CA$30.00"
    },
    {
        name: "Cable Knit Sweater",
        description: "Soft cable knit sweater",
        image_src: "../images/8.jpg",
        price: "CA$74.95"
    },
]

for(var i=0; i < menu_items.length; i++) {
    add_menu_item(menu_items[i]);

}
// Creating an empty array for selected clothes items and setting cookies to pass there
var selected_item = [];
Cookies.set("selected_item", JSON.stringify(selected_item));
