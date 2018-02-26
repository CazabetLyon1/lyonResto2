/**
 * DataController
 *
 * @description :: Server-side logic for managing data
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');

module.exports = {
	home: function(req, res){
		res.redirect('/homepage');
	},

	getDataFromYelp: function(req, res){
		var options = {
    	method: 'GET',
    	url: 'https://api.yelp.com/v3/businesses/search?term='+req.headers.contenurecherche+'&latitude='+req.headers.lat+'&longitude='+req.headers.lng,
    	headers: {
      	"Authorization": "Bearer nZ6C_XeQ-Wf2WpQ_I7E69ihLknkNG2KuWHgliR7tTcy9Bv7CdjyAi9pzPSA8TwN0MlSgH1H5p1XpTfrlx82T5aO--_p8GTuY99iSsDJLjt5T81iopViVdo4KBniIWnYx"
    	},
  	}
		request(options, function(error, response, headers, body){
			if(error){
				console.log(error);
			}else{
				console.log(response.body);
				res.send(response.body);
			}
		});

	}
};
