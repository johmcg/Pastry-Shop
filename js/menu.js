$(document).ready(function () {

    loadMenu();

function loadMenu() {

    fetch('json/mealsAndBeverages.json')
        .then((response) => response.json())
        .then((json) => {

            let htmlSweets = "";

            for (let i = 0; i < json.sweets.length; i++) {

                let sweetItem = json.sweets[i].item;
                let sweetPrice = json.sweets[i].price;
                let sweerDescript = json.sweets[i].description;

                htmlSweets += `<div class="mb-3">
                        <h5>${sweetItem}</h5>
                        <div>$${sweetPrice.toFixed(2)}</div>
                        <hr>
                        <div>${sweerDescript}
                        </div>
                    </div>`
            }

            $('#sweets').html(htmlSweets);


            let htmlBreakfast = "";

            for (let i = 0; i < json.breakfast.length; i++) {

                let bItem = json.breakfast[i].item;
                let bPrice = json.breakfast[i].price;
                let bDescript = json.breakfast[i].description;

                htmlBreakfast += `<div class="mb-3">
                        <h5>${bItem}</h5>
                        <div>$${bPrice.toFixed(2)}</div>
                        <hr>
                        <div>${bDescript}
                        </div>
                    </div>`
            }

            $('#breakfast').html(htmlBreakfast);

            let htmlBeverages = "";

            for (let i = 0; i < json.beverages.length; i++) {

                let beveragesItem = json.beverages[i].item;
                let beveragesPrice = json.beverages[i].price;
                let beveragesDescript = json.beverages[i].description;

                htmlBeverages += `<div class="mb-3">
                        <h5>${beveragesItem}</h5>
                        <div>$${beveragesPrice.toFixed(2)}</div>
                        <hr>
                        <div>${beveragesDescript}
                        </div>
                    </div>`
            }

            $('#beverages').html(htmlBeverages);

        })
        .catch((error) => {
            console.error('Error fetching JSON', error);
        });
}})