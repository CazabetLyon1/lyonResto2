
var request = require("request");
var fs = require('fs');

function getDataThroughAPI(){
var options = {
    method: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=45.7640&longitude=4.8357',
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
    var fileName = "donnees.json";
    fs.writeFile(fileName, response.body, (err) => {
      if(err) throw err;
      console.log("File created");
    });
  }
  });
}

getDataThroughAPI();
