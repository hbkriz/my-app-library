import { Component, ViewChild  } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor() { }
 
  @ViewChild('mapDiv') mapDiv;
  name = "GoogleMap";
  options = { center: new google.maps.LatLng(51.954464, -0.277304), zoom: 6, MapTypeId: google.maps.MapTypeId.TERRAIN };
  map: any;

  ngOnInit() {
      this.map = new google.maps.Map(this.mapDiv.nativeElement, this.options);
      var marker = new google.maps.Marker({position:this.options.center});
      marker.setMap(this.map);
       var locations = [
        {lat: 52.954464, lng: -1.277304},
        {lat: 52.954464, lng: -2.277304},
      ];
      locations.forEach((location) => { // foreach statement 
      var marker = new google.maps.Marker({position:location});
      marker.setMap(this.map);
    });
  }
}

// initMap() {

//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 5,
//           center: {lat: 51.954464, lng: -0.277304}
//         });

//         // Create an array of alphabetical characters used to label the markers.
//         var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//         // Add some markers to the map.
//         // Note: The code uses the JavaScript Array.prototype.map() method to
//         // create an array of markers based on a given "locations" array.
//         // The map() method here has nothing to do with the Google Maps API.
//          var locations = [
//         {lat: 52.954464, lng: -1.277304},
//         {lat: 52.954464, lng: -2.277304},
//       ];
//         var markers = locations.map(function(location, i) {
//           return new google.maps.Marker({
//             position: location,
//             label: labels[i % labels.length]
//           });
//         });

//         // Add a marker clusterer to manage the markers.
//         var markerCluster = new MarkerClusterer(map, markers,
//             {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
//       }
   
