// <!-- Business Logic for PLaces -->
function LocationList () {
  this.places = [],
  this.currentId = 0
}

LocationList.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

LocationList.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

LocationList.prototype.findPlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if(this.places[i]) {
      if (this.places[i].id==id) {
        return this.places[i];
      }
    }
  };
    return false;
}

LocationList.prototype.deletePlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i]. id==id) {
        delete this.places [i];
        return true
      }
    }
  };
  return false;
}
// business logic for destination
function Place(location, landmarks, restaurants, hotels, activities) {
  this.location = location;
  this.landmarks = landmarks;
  this.restaurants = restaurants;
  this.dates = dates;
  this.activities = activities;
}

// Destination.prototype.recRestaurants = function() {
//   return "Hungry? You should eat here: " + this.restaurants;
// }

//user interface Logic
var placesList = new LocationList();

function displayLocationDetails(locationToDisplay){
  var locationsList = $("ul#placesList");
  var htmlForLocation = "";
  locationToDisplay.places.forEach(function(place) {
    htmlForLocation += "<li id=" + place.id + ">" + place.location + " " + place.dates + "</li>";
  });
  locationsList.html(htmlForLocation);
}

function showPlaceInfo(id) {
  var place = placesList.findPlace(id);
  $("#show-places").show();
  $(".location").html(place.location);
  $(".landmarks").html(place.landmarks);
  $(".restaurants").html(place.restaurants);
  $(".dates").html(place.dates);
  $(".activities").html(place.activities);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + id + ">Delete</button>");
}

function attachListeners() {
  $("ul#placesList").on("click", "li", function() {
    showPlaceInfo(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    placesList.deletePlace(this.id);
    $("#show-places").hide();
    displayLocationDetails(placesList);
  });
};

$(document).ready(function(){
  attachListeners();
  $("form#enterDest").submit(function(event){
    event.preventDefault();
    // var arr = [];
    // for(var i=1; i<=5; i++)
    // {
    //   arr.push($("input#" + i).val());
    //   $("input#" + i).val("");
    // }
    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedRestaurants = $("input#restaurants").val();
    var inputtedDates = $("input#dates").val();
    var inputtedActivities = $("input#activities").val();
    $("input#location").val("");
    $("input#landmark").val("");
    $("input#restaurants").val("");
    $("input#dates").val("");
    $("input#activities").val("");
    var newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedRestaurants, inputtedDates, inputtedActivities);
    placesList.addPlace(newPlace);
    displayLocationDetails(placesList);
  });
});
