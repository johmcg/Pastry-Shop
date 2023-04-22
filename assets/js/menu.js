var menuItems = [];

// Fetch the JSON file using jQuery's getJSON method
$.getJSON('assets/json/menu.json', function (data) {
    // Iterate through the products array and create an object for each item
    $.each(data.products, function (index, product) {
        var menuItem = {
            name: product.item,
            price: product.price,
            imageSrc: product.image,
            ingredients: product.description,
            category: product.category
        };
        // Add the menuItem object to the menuItems array
        menuItems.push(menuItem);

        let html = "";

        for (let i = 0; i < menuItems.length; i++) {
            html += `<div class="menu-item filter-${menuItems[i].category}">
    <img src="${menuItems[i].imageSrc}" class="menu-img" alt="">
    <div class="menu-content">
      <a href="#">${menuItems[i].name}</a><span>$${menuItems[i].price.toFixed(2)}</span>
    </div>
    <div class="menu-ingredients">
      ${menuItems[i].ingredients}
    </div>
  </div>`;
        }

// Insert the HTML into the container
        $(".menu-container").html(html);
    });
});


