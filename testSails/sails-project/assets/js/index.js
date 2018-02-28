
function getData(latlng, callback){
  var contenuRecherche = document.getElementById('txtSearch').value;
  console.log("Value: ", contenuRecherche);
  $.ajax({
    url: routes.getDataFromYelp,
    type: 'GET',
    headers: {
      lat: latlng.lat,
      lng: latlng.lng,
      contenuRecherche: contenuRecherche
    },
    success: function(response, status, jqXHR){
      response = JSON.parse(response);
      var localisation = [];
      for(var i=0; i<response.businesses.length; i++){
        var infos = {
          "name": response.businesses[i].name,
          "reviews": response.businesses[i].review_count,
          "rating": response.businesses[i].rating,
          "status": response.businesses[i].is_closed,
          "urlImage": response.businesses[i].image_url,
          "address": response.businesses[i].location.display_address,
          "phone": response.businesses[i].display_phone,
          "coordinates": [response.businesses[i].coordinates.latitude, response.businesses[i].coordinates.longitude]
        };
        localisation.push(infos);
        //console.log("Localisation: ", localisation);
      }

      callback(localisation);
    },
    error: function(jqXHR, status, err){
      console.log(err);
    },
    complete: function(jqXHR, status){
    }
  });
}

//getDataThroughAPI();

function setGeolocalisation(cb){
  document.getElementById('mapid').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
  var map = L.map('map').setView([45.75, 4.85], 13);
  map.locate({setView:true, maxZoom:17});
  function onLocationFound(e) {
    console.log("Latlng: ", e);
     var radius = e.accuracy / 2;
     L.marker(e.latlng).addTo(map).bindPopup("Votre position actuelle").openPopup();
     L.circle(e.latlng, radius).addTo(map);
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
         maxZoom: 17,
         minZoom: 4
      }).addTo(map);
      cb(e.latlng);
   }
   map.on('locationfound', onLocationFound);

   function onLocationError(e) {
   alert(e.message);
   }
   map.on('locationerror', onLocationError);

  map.on('popupopen', function(event){
    //event.popup.setContent('Name');
  });
  map.on('popupclose', function(event){
    event.popup.setContent('No data');
  });
}

$(document).ready(function() {

  setGeolocalisation(function(latlng){});


  $(document).on('submit', '#searchForm', function() {
    document.getElementById('mapid').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
    var map = L.map('map').setView([45.75, 4.85], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 17,
        minZoom: 4
     }).addTo(map);
    // do your things
    //latlng recupere les donnees du callback
    setGeolocalisation(function(latlng){
      //locs = valeur de retour
      getData(latlng, function(locs){
        console.log("Locs: ", locs);
        //console.log("Locs: ", locs);
        document.getElementById('mapid').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
        // initialize the map
        var map = L.map('map').setView([latlng.lat, latlng.lng], 13);
        var greenIcon = L.icon({
          iconUrl: '/images/location.png',
          //shadowUrl: 'leaf-shadow.png',

          iconSize:     [26, 80], // size of the icon
          shadowSize:   [50, 64], // size of the shadow
          iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62],  // the same for the shadow
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        var markerPositionActuelle = L.marker((latlng), {icon: greenIcon}).bindPopup("Votre position").addTo(map);

        for(var i=0; i<locs.length; i++){

          var infos = 'Name: '+ locs[i].name + ' Rating: '+ locs[i].rating;
          var marker = L.marker(locs[i].coordinates, locs[i]).bindPopup(infos).on('click', markerOnClick).addTo(map);

        }

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            maxZoom: 17,
            minZoom: 4
         }).addTo(map);
      });
    });
    return false;
   });
});

function markerOnClick(e){
  //alert("You clicked the marker at "+ this.options.rating);
  document.getElementById("imageMarker").src = this.options.urlImage;
  document.getElementById("markerInfos").style.display = "block";
  document.getElementById("name").innerHTML = this.options.name;
  document.getElementById("address").innerHTML = this.options.address;
  document.getElementById("rating").innerHTML = this.options.rating;
  document.getElementById("reviews").innerHTML = this.options.reviews;
  document.getElementById("status").innerHTML = this.options.status;
  document.getElementById("phone").innerHTML = this.options.phone;

}

// var $star_rating = $('.star-rating .fa');
//
// var SetRatingStar = function() {
//   return $star_rating.each(function() {
//     if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
//       return $(this).removeClass('fa-star-o').addClass('fa-star');
//     } else {
//       return $(this).removeClass('fa-star').addClass('fa-star-o');
//     }
//   });
// };
//
// $star_rating.on('click', function() {
//   $star_rating.siblings('input.rating-value').val($(this).data('rating'));
//   return SetRatingStar();
// });
//
// SetRatingStar();
// $(document).ready(function() {
//
// });
