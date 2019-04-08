// <!-- Business Logic for PLaces -->
function Places () {
  this.destinations = [],
  this.currentId = 0
}

Places.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}

Places.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Places.prototype.findDestination = function(id) {
  for (var i=0; i< this.destinations.length; i++) {
    if(this.destinations[i])
      if (this.destinations[i].id==id) {
        return this.destinations[i];
      }
    }
  };
    return false;
}

Places.prototype.deleteDestination = function(id) {
  for (var i=0; i< this.destinations.length; i++) {
    if (this.destinations[i]) {
      if (this.destinations[i]. id==id) {
        delete this.contacts [i];
        return true
      }
    }
  };
  return false;
}
// business logic for destination
function Destination(location, landmarks, restaurants, hotels, activities) {
  this.location = location;
  this.landmarks = landmarks;
  this.restaurants = restaurants;
  this.hotels = hotels;
  this.activities = activities;
}
