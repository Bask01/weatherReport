/* myscript2.js */
$(document).ready(function() {
	//console.log("in jsonOut");

	var d = new Date();
	
	$("#cdate").html(d);

	// get data from local storage
	rowID = localStorage.getItem("rowID");
	cityArray = JSON.parse(localStorage.getItem("cityArray"));
	latArray = JSON.parse(localStorage.getItem("cityLat"));
	lngArray = JSON.parse(localStorage.getItem("cityLng"));

	var lat = latArray[rowID];
	var lon = lngArray[rowID];	
	
	// Get API key from https://home.openweathermap.org/

  var apiURI = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=484e47e5a69dfcd6d1d089e84051d0d5`;

	// ajax call
	$.ajax({
		type: "GET", url: apiURI, 
		dataType: "jsonp",
		success: function(response) {
			console.log(response);
			$(".dataCity").html(response.name);
			let temp = (response.main.temp - 273.15).toFixed(0);
			$(".dataTemp").html(`${temp} C`);
			$(".dataWind").html(`${response.wind.speed} m/s`);
			$(".dataHum").html(`${response.main.humidity} %`);
			$(".dataPress").html(`${response.main.pressure} hPa`);
		}
	});
		
	}); // end of document ready

/*
 The Kelvin scale is an absolute, thermodynamic temperature scale 
 using as its null point absolute zero, the temperature at which 
 all thermal motion ceases in the classical description of thermodynamics.
 To get Celsius, subtract 273.15 from Kelvin temp
*/

// clouds.all (%)
// main.humidity, pressure, temp
// name
// syst.country, sunrise, sunset
// weather[x].description
// wind.deg, speed


