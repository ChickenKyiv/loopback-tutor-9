const path    = require('path');
const async   = require('async');
const raven   = require('raven');
const _       = require('underscore');


let server     = require(path.resolve(__dirname, '../server/server'));
let database = server.datasources.reservationDS;

let helper     = require(path.resolve(__dirname, '003-helper'));

let AccessToken = require(path.resolve(__dirname, 'accesstoken'));
let ACL     	= require(path.resolve(__dirname, 'acl'));
let Campground  = require(path.resolve(__dirname, 'campground'));
let Customer    = require(path.resolve(__dirname, 'customer'));
let Reservation = require(path.resolve(__dirname, 'reservation'));

let options = {
	server: server,
	database: database,
	raven: raven, 
}
async.parallel({
	campground: async.apply(helper.create, options, Campground),
	reservation: async.apply(helper.create, options, Reservation),
	accessToken: async.apply(helper.create, options, AccessToken),
	acl: async.apply(helper.create, options, ACL),
	customer: async.apply(helper.create, options, Customer),
	

}, function (err, results) {
	console.log(results);
		if (err) {
			console.log(err);
			raven.captureException(err);			
			throw err;

		}

		if( !results || !results.attributes) {
			console.log("not imported well");
			raven.captureException("not imported well");
			console.log("not imported well");
		}
		Users.assignAdmin(options, results.customers[2].id);
		console.log('import finished');
	}

);
