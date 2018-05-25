function initMap () {
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 16,
		center: {lat: 48.4645398, lng: 34.9761604},
		mapTypeControl: false,
        zoomControl: true,
        scrollwheel: false,
        zoomControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
      	streetViewControl: false
	});
}