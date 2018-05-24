function initMap () {
	var uluru = {lat: 48.4645398, lng: 34.9761604};
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 16,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}			