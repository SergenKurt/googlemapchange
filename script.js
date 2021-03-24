        var locations = [
            ['San Francisco', 37.7749295, -122.4194155, 1],
            ['Las Vegas', 36.169941199999975, -115.1398296, 2],
            ];

            var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            styles: [
                    { elementType: "geometry", stylers: [{ color: "#2d2d2d" }] },
                    { elementType: "labels.text.stroke", stylers: [{ color: "#2d2d2d" }] },
                    { elementType: "labels.text.fill", stylers: [{ color: "#2d2d2d" }] },
                    {
                        featureType: "administrative.locality",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#bfa046" }], // sehir isimleri
                    },
                    {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{ color: "#2d2d2d" }], //ic alanlar
                    },
                    {
                        featureType: "poi.park",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#bfa046" }], //park isimleri
                    },
                    {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{ color: "#3d3d3d" }], //sokaklar
                    },
                    {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#3d3d3d" }],
                    },
                    {
                        featureType: "road",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#3d3d3d" }],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{ color: "#3d3d3d" }], //caddeler
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#3d3d3d" }], //sehirlerarasi yollar
                    },
                    {
                        featureType: "road.highway",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#3d3d3d" }],
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{ color: "#2d2d2d" }],
                    },
                    {
                        featureType: "transit.station",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#ffffff" }],
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{ color: "#262626" }],//deniz
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#262626" }],//deniz
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.stroke",
                        stylers: [{ color: "#262626" }], //deniz
                    },
            ],
            center: new google.maps.LatLng(37.92, -120.25),
            mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            const iconBase = "mapicon.png";

            for (i = 0; i < locations.length; i++) {  
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: iconBase
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
                }
            })(marker, i));
            }
