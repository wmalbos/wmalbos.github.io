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


    var projects_id =
        [
            {
                'id': 'project_thierrymonicault',
                'img':
                    [
                        './assets/img/thierrymonicault.png'
                    ]
            },

            {
                'id': 'project_blog',
                'img':
                    [
                        './assets/img/soon.jpg'
                    ]
            },

            {
                'id': 'project_via',
                'img':
                    [
                        './assets/img/via.png'
                    ]
            },

            {
                'id': 'project_web_agency',
                'img':
                    [
                        './assets/img/webagency.png'
                    ]
            },

            {
                'id': 'project_wordpress',
                'img':
                    [
                        './assets/img/wordpress/1.png',
                        './assets/img/wordpress/2.png',
                        './assets/img/wordpress/3.png',
                        './assets/img/wordpress/4.png',
                        './assets/img/wordpress/5.png',
                        './assets/img/wordpress/6.png',
                        './assets/img/wordpress/7.png',
                        './assets/img/wordpress/8.png',
                        './assets/img/wordpress/9.png',
                        './assets/img/wordpress/10.png',
                        './assets/img/wordpress/11.png',
                        './assets/img/wordpress/12.png',
                        './assets/img/wordpress/13.png',
                        './assets/img/wordpress/14.png',
                        './assets/img/wordpress/15.png',
                        './assets/img/wordpress/16.png',
                        './assets/img/wordpress/17.png',
                        './assets/img/wordpress/18.png',
                        './assets/img/wordpress/19.png',
                        './assets/img/wordpress/20.png',
                        './assets/img/wordpress/21.png',
                        './assets/img/wordpress/22.png',
                        './assets/img/wordpress/23.png',
                        './assets/img/wordpress/24.png',
                        './assets/img/wordpress/25.png',
                        './assets/img/wordpress/26.png'
                    ]
            },

            {
                'id': 'project_google_map',
                'img':
                    [
                        './assets/img/velib.png'
                    ]
            }
        ];


    var str = '';


    for (var i = 0; i < projects_id.length; i++) {


        str +=
            '                    <div class="modal fade" id="' + projects_id[i].id + '" tabindex="-1" role="dialog"  aria-hidden="true"> ' +
            '                        <div class="modal-dialog" role="document"> ' +
            '                            <div class="modal-content"> ' +
            '                                <div class="modal-header"> ' +
            '                                    <h5 class="modal-title">Site Internet de Mr MONICAULT</h5> ' +
            '                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> ' +
            '                                        <span aria-hidden="true">&times;</span> ' +
            '                                    </button> ' +
            '                                </div> ' +
            '                                <div class="modal-body"> ' +

            '                                    <!-- main slider carousel --> ' +
            '                                    <div class="row"> ' +
            '                                        <div class="col-lg-8 offset-lg-2" id="slider_' + i + '"> ' +

            '                                            <div id="carousel_' + i + '" class="carousel slide"> ' +
            '                                                <!-- main slider carousel items --> ' +
            '                                                <div class="carousel-inner"> ';


        for (var j = 0; j < projects_id[i].img.length; j++) {


            str +=
                '<div class="';

            if ( j == 0 )
                str += 'active ';

            str += 'item carousel-item" data-slide-number="' + j + '"> ' +
                '   <img src="' + projects_id[i].img[j] + '" class="img-fluid"> ' +
                '</div> ';
        }

        str +=

            '                                                </div> ' +
            '<ul class="carousel-indicators list-inline"> ';


        for (var j = 0; j < projects_id[i].img.length; j++) {

            str += '      <li class="list-inline-item';

            if ( j == 0 )
                str += ' active';

            if(projects_id[i].img.length <= 1)
                str +=' disable';

            str +='"> ' +
                '                                                        <a id="carousel-selector-' + i + j + '" class="selected" data-slide-to="' + j + '" ' +
                '                                                           data-target="#carousel_' + i + '"> ' +
                '   <img src="' + projects_id[i].img[j] + '" > ' +
                '                                                        </a> ' +
                '                                                    </li> ';
        }


        str +=
            '                                                </ul> ' +
            '                                            </div> ' +
            '                                        </div> ' +

            '                                    </div> ' +


            '                                    <table class="modal-table"> ' +
            '                                        <tr> ' +
            '                                            <th>Client:</th> ' +
            '                                            <td>Mr Thierry Monicault</td> ' +
            '                                        </tr> ' +

            '                                        <tr> ' +
            '                                            <th>Technologies:</th> ' +
            '                                            <td> ' +
            '                                                <ul> ' +
            '                                                    <li>HTML5/CSS3</li> ' +
            '                                                    <li>Javascript/jQuery/AJAX</li> ' +
            '                                                    <li>PHP5</li> ' +
            '                                                    <li>Symfony 3</li> ' +
            '                                                    <li>Doctrine/MySQL</li> ' +
            '                                                </ul> ' +
            '                                            </td> ' +
            '                                        </tr> ' +

            '                                        <tr> ' +
            '                                            <th>Description:</th> ' +
            '                                            <td> ' +
            '                                                <p> ' +
            '                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ' +
            '                                                    facilisis leo id dictum pellentesque. Maecenas dapibus dui elit, ac ' +
            '                                                    tempor odio mollis viverra. Aliquam faucibus ipsum sit amet risus ' +
            '                                                    auctor, eu congue urna lobortis. Cras euismod neque et nibh aliquet, ' +
            '                                                    quis rhoncus quam auctor. Sed tempor commodo enim, accumsan feugiat ' +
            '                                                    nunc ' +
            '                                                    egestas fringilla. Morbi vel fermentum mi. Nullam vulputate justo et ' +
            '                                                    enim posuere, sodales sodales dui pulvinar. Pellentesque dapibus, ' +
            '                                                    ante ' +
            '                                                    non aliquet commodo, mi lectus sodales est, ac tempus libero arcu eu ' +
            '                                                    diam. Pellentesque placerat purus at luctus commodo. Praesent ' +
            '                                                    lacinia ' +
            '                                                    rhoncus orci dapibus mattis. Sed vel vestibulum dui. Sed placerat ' +
            '                                                    imperdiet lectus, ut convallis sapien congue vitae. ' +
            '                                                </p> ' +
            '                                            </td> ' +
            '                                        </tr> ' +
            '                                        <tr> ' +
            '                                            <th colspan="2"> ' +
            '                                                <a class="btn btn-primary" href="http://www.thierrymonicault.fr" ' +
            '                                                   target="_blank">Voir le projet</a> ' +
            '                                            </th> ' +
            '                                        </tr> ' +
            '                                    </table> ' +

            '                                </div> ' +
            '                                <div class="modal-footer"> ' +
            '                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ' +
            '                                </div> ' +
            '                            </div> ' +
            '                        </div> ' +
            '                    </div>';

    }


    $('body').append(str);
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


