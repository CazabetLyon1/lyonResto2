var fs = require('fs');
//var $ = require('../node_modules/jquery');
//include("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
//var file=require('restaurant.json')

function setfile(){

  var fileName = "restaurant.json";
  var listepropre="properResto.json";

   //var listeBusinesses=[];
   var contenu=fs.readFileSync(fileName);
  var resto=JSON.parse(contenu);
  //console.log(resto);
  console.log(resto[0].businesses);
  var liste=[];
        for(var i=0;i<resto.length;i++){

         liste=liste.concat(resto[i].businesses);
         console.log(liste);
       }
 var listep=JSON.stringify(liste);

 fs.writeFile(listepropre,listep, (err) => {
    if(err) throw err;
//console.log("businesse rajouté " + resto[i].businesses);
});


}

setfile()
