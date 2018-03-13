
var request = require("request");
var fs = require('fs');

// function getDataThroughAPI(lat, longitude){
// var options = {
//     method: 'GET',
//     url: 'https://api.yelp.com/v3/businesses/search?term=restaurant&latitude='+lat+'&longitude='+longitude,
//     headers: {
//       "Authorization": "Bearer nZ6C_XeQ-Wf2WpQ_I7E69ihLknkNG2KuWHgliR7tTcy9Bv7CdjyAi9pzPSA8TwN0MlSgH1H5p1XpTfrlx82T5aO--_p8GTuY99iSsDJLjt5T81iopViVdo4KBniIWnYx"
//     },
//   }
//
// request(options, function(error, response, headers, body){
//   if(error){
//   console.log(error);
//   }
//   else{
//   //console.log(response.body);
//     var fileName = "result.json";
//     fs.writeFile(fileName, response.body, (err) => {
//       if(err) throw err;
//       console.log("File created");
//     });
//   }
//   });
// }
//
//
//  function getalldata(){
//   var lats = [45.701016, 45.721853, 45.742690, 45.763527, 45.784364, 45.807356];
//   var longitudes = [4.7669120, 4.795407, 4.823902, 4.852397, 4.880892, 4.909387, 4.937882, 4.966377];
//   lats.forEach(lat => {
//   longitudes.forEach(longitude => {
//   getDataThroughAPI(lat, longitude);
//   })
//   });
//   }


 function getalldata(){
  var lats = [45.701016, 45.721853, 45.742690, 45.763527, 45.784364, 45.807356];
  var longitudes = [4.7669120, 4.795407, 4.823902, 4.852397, 4.880892, 4.909387, 4.937882, 4.966377];
  lats.forEach(lat => {
  longitudes.forEach(longitude => {
  getDataThroughAPI(lat, longitude);
  })
  });
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
   var fileName = "result.json";
   fs.appendFile(fileName, response.body, (err) => {
     if(err) throw err;
     console.log("Résultats de recherche rajoutés pour latitude = "+lat+" et longitude = "+longitude);
   });
 }
 });
}

 getalldata();
