function PlaceList() {
  this.places = []
  this.currentID = 0
}
PlaceList.prototype.addPlace = function(place) {
  this.places.push(place);
}
PlaceList.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
}
PlaceList.prototype.findPlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i].id) == id) {
      return this.places[i];
    }
  };
  return false;
}

function Place(location, landmarks, date, notes) {
  debugger
  this.location = location,
  this.landmarks = landmarks,
  this.date = date,
  this.notes = notes
}


// $(document).ready(function() {
//   $("#places-form").submit(function(event){
//     event.preventDefault();
//     place();
//   })
// });
