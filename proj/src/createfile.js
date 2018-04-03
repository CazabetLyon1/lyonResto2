
var request = require("request");
var fs = require('fs');
var $ = require('jquery');


 function getalldata(){
  var lats = [45.701016, 45.721853, 45.742690, 45.763527, 45.784364, 45.807356];
  var longitudes = [4.7669120, 4.795407, 4.823902, 4.852397, 4.880892, 4.909387, 4.937882, 4.966377];


var i = 0;

var j = 0;

var interval = setInterval(function () {



  if( i >= lats.length ) {

    clearInterval(interval);

  }
getDataThroughAPI(lats[i], longitudes[j]);

  if( j >= longitudes.length ) {

    j = 0;

    i++;

  } else {

    j++;

  }

}, 500);
}

function getDataThroughAPI(lat, longitude){
var options = {
   method: 'GET',
   url: 'https://api.yelp.com/v3/businesses/search?term=restaurant&latitude='+lat+'&longitude='+longitude,
   headers: {
     "Authorization": "Bearer nZ6C_XeQ-Wf2WpQ_I7E69ihLknkNG2KuWHgliR7tTcy9Bv7CdjyAi9pzPSA8TwN0MlSgH1H5p1XpTfrlx82T5aO--_p8GTuY99iSsDJLjt5T81iopViVdo4KBniIWnYx"
   },
 }

request(options, function(error, response, headers, body){
 if(error){
 console.log(error);
 }
 else{
 //console.log(response.body);
   var fileName = "restaurant.json";
   var listepropre="properResto.json";
   fs.appendFile(fileName, response.body, (err) => {
     if(err) throw err;
     //console.log("Résultats de recherche rajoutés pour latitude = "+lat+" et longitude = "+longitude);
   });


   var contenu=fs.readFileSync(fileName,"UTF-8");
   var contenu2=JSON.parse(contenu);

   // $.getJSON(fileName, function (resto) {
   //          console.log("resto: ",resto);
   //      });
   //
         for(var i=0;i<contenu2.length;i++){
            fs.appendFile(listepropre,contenu2[i].businesses, (err) => {
               if(err) throw err;
             console.log("businesse rajouté " + contenu2[i].businesses);
            });
        }
    }
 });
}

 getalldata();
