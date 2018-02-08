// VARIABLES

const CONFIG_DIRECTORY = "./config/";
const PORTFOLIO_DIRECTORY = "./assets/img/";
const EMPTY_IMAGE = "soon.png";

var configuration = {};

// CONFIGURATION FILE READER
///////////////////////////////////

function reader_file(_filename) {


    $.ajax({
        type: 'GET',
        url: CONFIG_DIRECTORY + _filename + '.json',
        async: true,
        dataType: 'json',
        beforeSend: function () {

        },
        success: function (_jsonDatas) {

            configuration = _jsonDatas;

            $("body").trigger('config_loaded');
        },

        error: function (resultat, statut, erreur) {

            $("body").trigger('config_error');
        }

    });

}


// MAIN
////////////

// Reading configuration file
reader_file("config");


$("body").on('config_loaded', function () {

    // Initialize about tabs
    initializeAbout();

    // Initialize cursus items
    initializeCursus();

    // Initialize portfolio items
    initializePortfolio();

    // Initialize portfolio items modals
    initializePortfolioModals();

});


/**
 *
 */
function initializeAbout() {

    // Init
    var about_tabs = configuration.about,
        active = "",
        str_link = "",
        str_content = "";


    // For each developper item
    for (var i = 0; i < about_tabs.length; i++) {

        (i === 0) ? active = ' active' : active = "";

        str_link +=
            '<a class="nav-item' + active + '" id="' + about_tabs[i].id + '-tab" data-toggle="tab" href="#' + about_tabs[i].id + '" role="tab" aria-controls="' + about_tabs[i].id + '" aria-selected="true">' + about_tabs[i].title + '</a>';

        str_content +=

            '<div class="tab-pane fade show'+ active +'" id="' + about_tabs[i].id + '" role="tabpanel" aria-labelledby="' + about_tabs[i].id + '-tab">' +
            '   <p class="tab-introduction">' +about_tabs[i].introduction+ '</p>';

        for (var j = 0; j < about_tabs[i].paragraphs.length; j++) {

            str_content +=
                '<p>' +  about_tabs[i].paragraphs[j] + '</p>';

        }
        str_content += '</div>';

    }


    $('#nav-tab').append(str_link);
    $('#nav-tabContent').append(str_content);




}

/**
 *
 */
function initializeCursus() {

    // Init
    var cursus_items = configuration.cursus;


    // For each developper item
    for (var i = 0; i < cursus_items.length; i++) {

        var str = "";

        for (var j = 0; j < cursus_items[i].content.length; j++) {

            str +=

                '<div class="cursus-item">' +
                '   <div class="row">' +

                '       <div class="col-md-6 cursus-item__header">' +
                '           <h2 class="cursus-title">' + cursus_items[i].content[j].title + '</h2>' +
                '           <p class="cursus-date">' + cursus_items[i].content[j].date + '</p>' +
                '       </div>' +

                '       <div class="col-md-6 cursus-item__content">' +
                '           <p class="cursus-status">' + cursus_items[i].content[j].status + '</p>' +
                '           <p class="cursus-description">' + cursus_items[i].content[j].description + '</p>' +
                '       </div>' +

                '   </div>' +

                '</div>';
        }

        $('#' + cursus_items[i].id).append(str);
    }


}

/**
 * Initialize the portfolio items
 */
function initializePortfolio() {

    // Init
    var str = "",
        portfolio_items = configuration.portfolio;


    // For each portfolio_item
    for (var i = 0; i < portfolio_items.length; i++) {

        str +=
            '<div class="col-md-4 project-item">' +

            '   <figure>';

        if (portfolio_items[i].img.length < 1) {
            str += '<img src="' + PORTFOLIO_DIRECTORY + EMPTY_IMAGE + '" alt="Article en cours de développement">';
        } else {
            str += '<img src="' + PORTFOLIO_DIRECTORY + portfolio_items[i].img[0] + '" alt="Screenshot du projet ' + portfolio_items[i].title + '">';
        }

        str +=
            '   </figure>' +

            '   <div class="modal-hover">' +
            '       <button class="modal-link" data-toggle="modal" data-target="#' + portfolio_items[i].id + '">' +
            '           <i class="fa fa-search"></i>' +
            '       </button>' +

            '       <p class="modal-description">' + portfolio_items[i].title + '</p>' +
            '   </div>' +

            '</div>';
    }

    $('#portfolio_items').append(str);
}

/**
 * Initialize the portfolio modals
 */
function initializePortfolioModals() {

    // Init
    var str = "",
        portfolio_items = configuration.portfolio;


    // For each portfolio_item
    for (var i = 0; i < portfolio_items.length; i++) {

        str +=
            '<div class="modal fade" id="' + portfolio_items[i].id + '" tabindex="-1" role="dialog"  aria-hidden="true"> ' +
            '   <div class="modal-dialog" role="document"> ' +
            '       <div class="modal-content"> ' +

            // MODAL HEADER
            '           <header class="modal-header"> ' +
            '               <h5 class="modal-title">' + portfolio_items[i].title + '</h5> ' +
            '               <button type="button" class="close" data-dismiss="modal" aria-label="Close"> ' +
            '                   <span aria-hidden="true">&times;</span> ' +
            '               </button> ' +
            '           </header> ' +

            // MODAL BODY
            '           <div class="modal-body"> ' +

            '               <div class="row"> ' +
            '                   <div class="col-md-8 offset-md-2" id="slider_' + i + '"> ' +
            '                       <div id="carousel_' + i + '" class="carousel slide"> ' +

            // PORTFOLIO PAGE VIEW
            '                           <div class="carousel-inner"> ';

        // For each portfolio_item big image
        for (var j = 0; j < portfolio_items[i].img.length; j++) {

            str +=
                '<div class="';

            // First item is active
            if (j === 0) str += 'active ';


            str += 'item carousel-item" data-slide-number="' + j + '"> ' +
                '   <img src="' + PORTFOLIO_DIRECTORY + portfolio_items[i].img[j] + '" class="img-fluid"> ' +
                '</div> ';
        }

        str +=

            '                           </div> ' +
            '                           <ul class="carousel-indicators list-inline"> ';

        // For each portfolio_item thumnail image
        for (var j = 0; j < portfolio_items[i].img.length; j++) {

            str +=
                '<li class="list-inline-item';

            // First item is actives
            if (j === 0) str += ' active';

            // Disable thumnail if only one image
            if (portfolio_items[i].img.length <= 1) str += ' disable';

            str +=
                '"> ' +
                '   <a id="carousel-selector-' + i + j + '" class="selected" data-slide-to="' + j + '" data-target="#carousel_' + i + '"> ' +
                '       <img src="' + PORTFOLIO_DIRECTORY + portfolio_items[i].img[j] + '" > ' +
                '   </a> ' +
                '</li> ';
        }


        str +=
            '                           </ul> ' +
            '                       </div> ' +
            '                   </div> ' +
            '               </div> ' +

            // Portfolio_item additionnal informations
            '               <table class="modal-table"> ' +

            '                   <tr> ' +
            '                       <th>Client:</th> ' +
            '                       <td>' + portfolio_items[i].client + '</td> ' +
            '                   </tr> ' +

            '                   <tr> ' +
            '                       <th>Technologies:</th> ' +
            '                       <td> ' +
            '                           <ul> ';

        for (var k = 0; k < portfolio_items[i].technologies.length; k++) {

            str +=
                '<li>' + portfolio_items[i].technologies[k] + '</li>';
        }

        str +=
            '                           </ul> ' +
            '                       </td> ' +
            '                   </tr> ' +

            '                   <tr> ' +
            '                       <th>Description:</th> ' +
            '                       <td> ' +
            '                           <p> ' + portfolio_items[i].description + '</p> ' +
            '                       </td> ' +
            '                   </tr> ';

        if (portfolio_items[i].link !== "") {

            str +=
                '                   <tr> ' +
                '                       <th colspan="2"> ' +
                '                           <a class="btn btn-primary" href="http://www.thierrymonicault.fr" target="_blank">Voir le projet</a> ' +
                '                       </th> ' +
                '                   </tr> ';
        }

        str +=

            '               </table> ' +

            '           </div> ' +

            // MODAL FOOTER
            '           <footer class="modal-footer"> ' +
            '               <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button> ' +
            '           </footer> ' +
            '       </div> ' +
            '   </div> ' +
            '</div>';

    }

    // Append Modals into current DOM
    $('body').append(str);
}


$(document).ready(function () {

    // Loader
    setTimeout(function () {
        $('#loader').addClass('loader_fade');
    }, 1000);


    // Google Map
    googleMapInitialization();

    // Tabs
    $("#tabs").tabs();

    // Create charts
    var charts = [

        new Chart($('#integrateur'), {
            type: 'doughnut',
            data: deliveredData[0],
            options: deliveredOpt[0]
        }),

        new Chart($('#wordpress'), {
            type: 'doughnut',
            data: deliveredData[1],
            options: deliveredOpt[1]
        }),

        new Chart($('#backoffice'), {
            type: 'doughnut',
            data: deliveredData[2],
            options: deliveredOpt[2]
        }),

        new Chart($('#learning'), {
            type: 'doughnut',
            data: deliveredData[3],
            options: deliveredOpt[3]
        })

    ];


    $('.modal-link').on('click', function (e) {
        e.preventDefault();
    });

    // Smooth scroll
    $('.nav-link').on('click', function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({scrollTop: $(page).offset().top}, speed); // Go
        return false;
    });


});


// GOOGLE MAP
////////////////////////

function googleMapInitialization() {

    var myLatLng =
        {lat: 47.216671, lng: 2.08333};

    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: myLatLng,
        zoom: 7,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Vierzon'
    });
}


// NAVIGATION SCROLL
////////////////////////


$(window).scroll(function () {

    var iCurScrollPos = $(this).scrollTop();

    if (!$('#navigation').hasClass('active') && iCurScrollPos > 200) {
        $('#navigation').addClass('active');
    }


    if ($('#navigation').hasClass('active') && iCurScrollPos < 200) {
        $('#navigation').removeClass('active');
    }

});


// DOUGHNUT CHARTS
////////////////////////

// Charts options
var deliveredOpt =
    [
        {
            cutoutPercentage: 88,
            animation: {
                animationRotate: true,
                duration: 2000
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },

        {
            cutoutPercentage: 88,
            animation: {
                animationRotate: true,
                duration: 2000
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },

        {
            cutoutPercentage: 88,
            animation: {
                animationRotate: true,
                duration: 2000
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        },

        {
            cutoutPercentage: 88,
            animation: {
                animationRotate: true,
                duration: 2000
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        }
    ];

// Charts datas
var deliveredData =
    [
        {
            labels: [
                "Value"
            ],
            datasets: [
                {
                    data: [85, 15],
                    backgroundColor: [
                        "#3ec556",
                        "rgb(249, 249, 249)"
                    ],
                    hoverBackgroundColor: [
                        "#3ec556",
                        "rgb(249, 249, 249)"
                    ],
                    borderWidth: [
                        0, 0
                    ]
                }]
        },

        {
            labels: [
                "Value"
            ],
            datasets: [
                {
                    data: [65, 35],
                    backgroundColor: [
                        "#3ec556",
                        "rgb(249, 249, 249)"
                    ],
                    hoverBackgroundColor: [
                        "#3ec556",
                        "rgb(249, 249, 249)"
                    ],
                    borderWidth: [
                        0, 0
                    ]
                }]
        },

        {
            labels: [
                "Value"
            ],
            datasets: [
                {
                    data: [70, 30],
                    backgroundColor: [
                        "#3ec556",
                        "rgb(249, 249, 249)"
                    ],
                    hoverBackgroundColor: [
                        "#3ec556",
                        "rgb(249, 249, 249)"
                    ],
                    borderWidth: [
                        0, 0
                    ]
                }]
        },

        {
            labels: [
                "Value"
            ],
            datasets: [
                {
                    data: [95, 5],
                    backgroundColor: [
                        "#3ec556",
                        "rgb(249, 249, 249)"
                    ],
                    hoverBackgroundColor: [
                        "#3ec556",
                        "rgb(249, 249, 249)"
                    ],
                    borderWidth: [
                        0, 0
                    ]
                }]
        }
    ];


