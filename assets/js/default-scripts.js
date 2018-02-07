$(document).ready(function () {

    // Loader
    setTimeout(function() {
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


});


// GOOGLE MAP
////////////////////////

function googleMapInitialization() {

    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 47.216671, lng: 2.08333},
        zoom: 13,
        disableDefaultUI: true
    });
}


// NAVIGATION SCROLL
////////////////////////


$(window).scroll(function () {

    var iCurScrollPos = $(this).scrollTop();

    if ( ! $('#navigation').hasClass('active') && iCurScrollPos > 200) {
        $('#navigation').addClass('active');
    }


    if ( $('#navigation').hasClass('active') && iCurScrollPos < 200) {
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
                        "rgba(0,0,0,0)"
                    ],
                    hoverBackgroundColor: [
                        "#3ec556",
                        "rgba(0,0,0,0)"
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
                    data: [60, 40],
                    backgroundColor: [
                        "#3ec556",
                        "rgba(0,0,0,0)"
                    ],
                    hoverBackgroundColor: [
                        "#3ec556",
                        "rgba(0,0,0,0)"
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
                        "rgba(0,0,0,0)"
                    ],
                    hoverBackgroundColor: [
                        "#3ec556",
                        "rgba(0,0,0,0)"
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
                    data: [90, 10],
                    backgroundColor: [
                        "#3ec556",
                        "rgba(0,0,0,0)"
                    ],
                    hoverBackgroundColor: [
                        "#3ec556",
                        "rgba(0,0,0,0)"
                    ],
                    borderWidth: [
                        0, 0
                    ]
                }]
        }
    ];


