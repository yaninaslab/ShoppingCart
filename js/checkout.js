// Function that deletes items by clicking on Delete button on the card.
function delete_item() {
    // We're gabbing the 'article' element here
    var deleted_card = this['parentNode'];
    // Grabbing 'h3' tag which is the second element in the array
    var item_name = deleted_card.childNodes[1]['innerText'];
    // Removing card from DOM
    deleted_card.remove();
    
    // Removing card from cookies
    var selected_item_json = Cookies.get("selected_item");
    var selected_clothes = JSON.parse(selected_item_json);
    for(var i=0; i < selected_clothes.length; i++) {
        if(selected_clothes[i]['name'] == item_name) {
            selected_clothes.splice(i, 1);
            i = selected_clothes.length // break;
        }
    }
    // var deleted_card_index = selected_clothes.find(item => item.name === item_name);
    // selected_clothes.splice(deleted_card_index, 1)

    //selected_clothes_json = JSON.stringify(selected_clothes);
    //Cookies.set("selected_item", selected_clothes_json);
}
// This function empties the entire cart by removing 'cart_containter' from DOM.
function empty_cart() {
    cart_containter.remove();
    // This removes cookies.
    Cookies.remove("selected_item");
}
// Adding an event to the button
document.getElementById('empty_cart').addEventListener('click', empty_cart);
// Grabing the element from the page which is required by all items in the array.
var cart_containter = document.getElementById("menu_container");
// This function adds clothes items to the page based on what items were selected (cookies)
function add_menu_item(item) {
    // Setting up a variable and assigning a tag to it
        var menu_card = document.createElement("article");
    // Assgning a class to new element
        menu_card.classList.add("card_container");

        //var item_json = JSON.stringify(item);
        //menu_card.setAttribute('onclick', `handle_click('${item_json}')`);
     
        var card_image = document.createElement("img");
        card_image.src = item.image_src;
    
        var card_title = document.createElement("h3");
        card_title.innerText = item.name;
    
        var card_description = document.createElement('p');
        card_description.innerText = item.description;
    
        var card_price = document.createElement('h5');
        card_price.innerText = item.price;

        var delete_btn = document.createElement('button');
        delete_btn.classList.add("delete_btn");
        delete_btn.innerText = "Delete";
        delete_btn.addEventListener('click', delete_item);
    
        menu_card.appendChild(card_image);
        menu_card.appendChild(card_title);
        menu_card.appendChild(card_description);
        menu_card.appendChild(card_price);
        menu_card.appendChild(delete_btn);
        cart_containter.appendChild(menu_card);
    
    }
// This is a loop for adding clothes items
    var selected_item_json = Cookies.get("selected_item");
    var selected_clothes = JSON.parse(selected_item_json);
    for(var i=0; i < selected_clothes.length; i++) {
        add_menu_item(selected_clothes[i]);
    }
    // This message promts the user to select items if nothing has been selected
    if(selected_clothes == 0) {
        alert("You haven't picked anything. Please go back to the selection page!");
        
    }

