
// VARIABLES
////////////////////////////////

const DIRECTORY = {
    "CONFIG" : "./config/",
    "PORTFOLIO" : "./assets/img/"
};

const EMPTY_IMAGE = "soon.png";

var smooth_speed = 750;
var configuration = {};



$(document).ready(function () {

    // MAIN
    ////////////////

    // Reading configuration file
    reader_file("config");

    // LISTENERS
    ////////////////

    /**
     * Smooth scrolling
     */
    $('.nav-link').on('click', function () {

        var page = $(this).attr('href');
        var speed = smooth_speed;

        $('html, body').animate({scrollTop: $(page).offset().top}, speed);
    });


});





// LISTENERS
////////////////////////////////


/**
 * Reader config file fire success
 */
$("body").on('config_loaded', function () {

    // Initialize about tabs
    initializeAbout();

    // Initialze competences charts
    initializeCharts();

    // Initialize cursus items
    initializeCursus();

    // Initialize portfolio items
    initializePortfolio();

    // Initialize portfolio items modals
    initializePortfolioModals();

    // Google Map
    initializeGoogleMap();

    // Tabs
    $("#tabs").tabs();


    // Fire page loader
    $("body").trigger('page_loaded');

});


/**
 *
 */
$("body").on('page_loaded', function () {

    // Remove loaded because the page is loaded
    setTimeout(function () {
        $('#loader').addClass('loader_fade');
    }, 1000);

});

// FUNCTIONS
////////////////////////////////

/**
 * Reader of configuration file
 */
function reader_file(_filename) {


    $.ajax({
        type: 'GET',
        url: DIRECTORY.CONFIG + _filename + '.json',
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


/**
 * Initialize the about tabs
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


    // Append to the DOM
    $('#nav-tab').append(str_link);
    $('#nav-tabContent').append(str_content);




}

/**
 * Initialize the cursus timeline
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

        // Append to the DOM
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
            '<div class="col-lg-4 col-md-6 column"> ' +
            '   <div class="project-item">' +

            '       <figure>';

        if (portfolio_items[i].img.length < 1) {
            str += '<img src="' + DIRECTORY.PORTFOLIO + EMPTY_IMAGE + '" alt="Article en cours de développement">';
        } else {
            str += '<img src="' + DIRECTORY.PORTFOLIO + portfolio_items[i].img[0] + '" alt="Screenshot du projet ' + portfolio_items[i].title + '">';
        }

        str +=
            '       </figure>' +

            '       <div class="modal-hover">' +
            '           <button class="modal-link" data-toggle="modal" data-target="#' + portfolio_items[i].id + '">' +
            '               <i class="fa fa-search"></i>' +
            '           </button>' +

            '           <p class="modal-description">' + portfolio_items[i].title + '</p>' +
            '       </div>' +
            '   </div>' +

            '</div>';
    }

    // Append to the DOM
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
            '                   <div class="col-md-10 offset-md-1" id="slider_' + i + '"> ' +
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
                '   <img src="' + DIRECTORY.PORTFOLIO + portfolio_items[i].img[j] + '" class="img-fluid"> ' +
                '</div> ';
        }

        if (portfolio_items[i].img.length <= 1){
            str +=
                '<div class="item carousel-item active" data-slide-number="1"> ' +
                '   <img src="' + DIRECTORY.PORTFOLIO + EMPTY_IMAGE + '" class="img-fluid"> ' +
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
                '       <img src="' + DIRECTORY.PORTFOLIO + portfolio_items[i].img[j] + '" > ' +
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


/**
 * Initialize the google map
 */
function initializeGoogleMap() {

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

/**
 * Initialize competences charts
 */
function initializeCharts() {

    var charts = configuration.charts;
    for(var i = 0; i < charts.length; i++) {

        new Chart($('#' + charts[i].id), {
            type: charts[i].type,
            data: charts[i].data,
            options: charts[i].options
        })
    }
}





