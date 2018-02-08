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


