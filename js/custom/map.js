let marker;
let map;
let autocomplete;

function initMap() {
    autocomplete = new window.google.maps.places.Autocomplete(document.getElementById("autocomplete"));
    autocomplete.setComponentRestrictions(
        {'country': ['jm']});

    map = new window.google.maps.Map(document.getElementById("map"), {
        zoom  : 12,
        center: { lat: 17.99702, lng: -76.79358 }
    });

    autocomplete.addListener('place_changed', function (){
        let place = autocomplete.getPlace();

        if (place.address_components)
            setMarkerLocation(autocomplete.getPlace().geometry.location);
    });

    autocomplete.onkeypress = function(event) {
        if (event.keyCode == 13)
            return false;
    };

    map.addListener('click', function (location){
        setMarkerLocation(location.latLng);
    });

}

    /**
     * Set marker on the map
     *
     * @param  {object}  latLng               marker location
     * @param  {boolean} isNeedToUpdateState  Is need to update the state on while setting marker on google map
     *
     * @return {void}
     */
     function setMarkerLocation(latLng) {
        if (marker) {
            marker.setPosition(latLng);
        }
        else {
            marker = new window.google.maps.Marker({
                map: map,
                position: latLng,
                draggable: true
            });
        }

        document.getElementById("lat").value = latLng.lat();
        document.getElementById("lng").value = latLng.lng();
        $('.latlng_validation_error').html('');

        getMarkerAddress(marker.getPosition());

        map.setCenter(latLng);

        marker.addListener('dragend', function (location) {
            let latLng = location.latLng;
            setMarkerLocation(latLng);
        });
    }

    function getMarkerAddress(latLng) {
        let geocoder = new window.google.maps.Geocoder();

        geocoder.geocode({
            latLng: latLng
        }, function (response) {
            if (response) {
                document.getElementById("autocomplete").value = response[0].formatted_address;
            }
        });
    }

    if (window.google) {
        //initMap();
    }