var path     = require('path');

let app      = require(path.resolve(__dirname, '../server/server'));
var database = app.datasources.reservationDS;


var lbTables = [  
  'AccessToken',
  'ACL',  
  'Campground',
  'Customer',
  'Reservation'
];

database.automigrate(lbTables, function(err) {
  if (err) throw err;

  console.log( 'Loopback tables [' + lbTables.toString() + '] created in ' + database.adapter.name );
  database.disconnect();
});