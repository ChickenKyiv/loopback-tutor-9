const path    = require('path');
const _       = require('underscore');

let AccessToken = require(path.resolve(__dirname, 'accesstoken'));
let ACL    		= require(path.resolve(__dirname, 'acl'));
let Campground  = require(path.resolve(__dirname, 'campground'));
let Customer    = require(path.resolve(__dirname, 'customer'));
let Reservation = require(path.resolve(__dirname, 'reservation'));
let table_name = 'Attribute'

const get = () => {

  	return 
  	_.union(
		AccessToken.get(),
		ACL.get(),
		Campground.get(),
		Customer.get(),
        Reservation.get(),        
	);
};


module.exports.get        = get;
module.exports.table_name = table_name;