const Raven = require('raven');
var express = require("express");

var app = express();
Raven.config('https://77aa2ee9a7ce484497f56278982a0809@sentry.io/305339').install()

var api_key = process.env.Mailgun_api_key;
var domain = process.env.Mailgun_domain;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Louise van den Berg <louisevdb84@gmail.com>',
  to: 'Louise van den Berg <louisevdb84@gmail.com>',
  subject: 'Reservation made',
  text: 'You have successfully made a reservation'
};

module.exports = function (Reservation) {
   
        Reservation.validate('startDate', dateValidator, { message: 'endDate should be after startDate' });
        function dateValidator(err) {
            if (this.startDate >= this.endDate) {
                err();
            }
        }

    Reservation.observe("after save", function (ctx, next, asd, dsa, asad) {
        try {
            Reservation.app.models.campground.findById(ctx.instance.campgroundId, function (err, campground) {
                mailgun.messages().send(data, function (error, body) {                    
                    console.log('email sent!');
                });

            });
            next();
        } catch (err) {
            console.trace(err);
            Raven.captureException(err);        
          }
        });     
    
};
