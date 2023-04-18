$(document).ready(function () {

    loadInfo();

    $('.card-menu').click(function () {
        $('#menu').show();
        $('#apparel').hide();
        $('#contact').hide();
        $('#locations').hide();
    });

    $('.card-apparel').click(function () {
        $('#menu').hide();
        $('#apparel').show();
        $('#contact').hide();
        $('#locations').hide();
    });

    $('.card-nav').click(function () {
        $('#menu').hide();
        $('#apparel').hide();
        $('#contact').hide();
        $('#locations').show();
    });


    $('.card-comment').click(function () {
        $('#menu').hide();
        $('#apparel').hide();
        $('#contact').show();
        $('#locations').hide();
    });

    // Handle click events on the menu items
    $('#earlyMeal').click(function () {
        $('#breakfast').show();
        $('#sweets').hide();
        $('#beverages').hide();
    });

    $('#decayingTeeth').click(function () {
        $('#breakfast').hide();
        $('#sweets').show();
        $('#beverages').hide();
    });

    $('#thirsty').click(function () {
        $('#breakfast').hide();
        $('#sweets').hide();
        $('#beverages').show();
    });


    $("i").on('click', function () { //collapses menu on link click
        $('.collapse').collapse('hide');
    })

    $('[data-toggle="apronPopover"]').popover({
        placement: 'left',
        trigger: 'hover',
        html: true,
        content: '<img src="img/apron.png" class="h-100 w-100" alt="Sample Image">'
    });

    $('[data-toggle="shirtPopover"]').popover({
        placement: 'left',
        trigger: 'hover',
        html: true,
        content: '<img src="img/shirt.png" class="h-100 w-100" alt="Sample Image">'
    });



});

function loadInfo (){

    fetch('json/products.json')
        .then((response) => response.json())
        .then((json) => {

            let htmlMerch = "";

            for (let i = 0; i < json.products.length; i++) {

                let product = json.products[i].item;
                let cost = json.products[i].price;
                let pic = json.products[i].image;

                htmlMerch += `
<div class="card rounded-3 mt-3 ms-3 me-3 mb-3" >
<div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                             <img    data-toggle="apronPopover"
                                                rel="popover"
                                                src="${pic}"
                                                class="img-fluid rounded-3 icon" alt="Shopping item" style="width: auto; height=auto">
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">${product}</p>
                            <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2"
                                    onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                <i className="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="0" name="quantity" value="2" type="number"
                                   className="form-control form-control-sm"/>

                            <button className="btn btn-link px-2"
                                    onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">$${cost}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                        </div>
                    </div>
                </div></div>`;
            }


            htmlMerch += `<button type=\"button\" class=\"ms-3 btn btn-primary btn-block btn-lg\">Checkout</button>`;


            $('#apparel').html(htmlMerch);


            let htmlLocations = "";

            for (let i = 0; i < json.locations.length; i++) {

                let storeLocation = json.locations[i].name;
                let street = json.locations[i].streetName;
                let city = json.locations[i].city;

                htmlLocations += `<div class="mb-5">
                    <h4>
                        ${storeLocation}
                    </h4>
                    <hr>
                    <div>
                        ${street}
                    </div>
                    <div>
                        ${city}
                    </div>
                </div>`;
            }

            $('#locations').html(htmlLocations);


        })
        .catch((error) => {
            console.error('Error fetching JSON', error);
        });

}