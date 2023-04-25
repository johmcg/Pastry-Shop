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

$(document).ready(function () {
    //Images need to load first otherwise the container is not
    // displayed correctly this was due to using json to load data in menu section.
    var $grid = $('.menu-container').imagesLoaded( function() {
        $grid.masonry({
            itemSelector: '.menu-item',
            columnWidth: '.menu-item',
            percentPosition: true,
            transitionDuration: '0.3s'
        });
    });
});

$(document).ready(function () {
$("#orderBtn").click(function (event) {
    event.preventDefault();
    $('.email-form').html(`<div class="display-6 ms-3">Your message has been sent. Thank you!</div>`);
})});