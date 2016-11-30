/*
=======================================================

    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments. 
You are free to build a simple web page that interacts 
with OMBD. It can simply display data within the HTML 
page or buttons and text fields can be added to interact
with the data and update the page accordingly. 

Have fun! 
 
=======================================================
*/

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644}, zoom: 8
	});
}