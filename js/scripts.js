function PlaceList() {
  this.places = []
  this.currentId = 0
}
PlaceList.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}
PlaceList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
PlaceList.prototype.findPlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if ((this.places[i].id) == id) {
      return this.places[i];
    }
  };
  return false;
}

function Place(name, location, landmarks, date, notes) {
  this.name = name,
  this.location = location,
  this.landmarks = landmarks,
  this.date = date,
  this.notes = notes
}
//UI
function displayPlaceDetails(placeListToDisplay) {
  var vistedPlace = $("#results");
  var htmlforPlaceInfo = "";
  placeListToDisplay.places.forEach(function(place){
    htmlforPlaceInfo += "<li id=" + place.id + ">" + place.name + " " + place.location + " " + place.landmarks + " " + place.date + " " + place.notes + "<li>";
  });
  vistedPlace.html(htmlforPlaceInfo);
};
function showPlace(placeId) {
  var place = placeList.findPlace(placeId);
  $("#show-place").show();
  $(".name").html(place.name);
  $(".location").html(place.location);
  $(".landmark").html(place.landmarks);
  $(".date").html(place.date);
  $(".note").html(place.notes);
  var buttons = $("#buttons");
  buttons.empty();
}



function attachPlaceListeners() {
  $("#results").on("click", "li", function(){
    showPlace(this.id);
  });
};
var placeList = new PlaceList();
$(document).ready(function() {
  attachPlaceListeners();
  $("#places-form").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedLocation = $("#location-input").val();
    var inputtedLandmarks = $("#landmarks-input").val();
    var inputtedDate = $("#date-input").val();
    var inputtedNotes = $("#notes-input").val();

    $("#name").val("");
    $("#location-input").val("");
    $("#landmark-input").val("");
    $("#date-input").val("");
    $("#note-input").val("");

    var newPlace = new Place(inputtedName, inputtedLocation, inputtedLandmarks, inputtedDate, inputtedNotes);
    placeList.addPlace(newPlace);
    displayPlaceDetails(placeList);
  });
});
