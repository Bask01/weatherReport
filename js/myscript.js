var cityArray = new Array();
var latArray = new Array();
var lngArray = new Array();
var rowID;

$(document).ready(function() {
  console.log("in doc ready");

  $.getJSON("dataFiles/cities.json", function(data) {
    //console.log(data);

    $("#cityList").html("");
    for (let x=0; x < data.cities.length; x++) {
      cityArray[x] = data.cities[x].cityName;
      latArray[x] = data.cities[x].cityLat;
      lngArray[x] = data.cities[x].cityLng;

      //display the cities
      $("#cityList").append(
        `
          <li id='${x}'>
              <a href='weather.html'>
                  ${data.cities[x].cityName}
              </a>
              <hr>
          </li>
        `
      )

    }//end of for loop

    /* console.log(cityArray);
    console.log(latArray);
    console.log(lngArray); */

    localStorage.setItem("cityArray", JSON.stringify(cityArray));
    localStorage.setItem("cityLat", JSON.stringify(latArray));
    localStorage.setItem("cityLng", JSON.stringify(lngArray));

  });//end of .getJSON

});//end of doc ready

//grab the rowID
$(document).on("click", "#cityList > li", function() {
  localStorage.setItem(
    "rowID",
    $(this).closest("li").attr("id") 
  );
})