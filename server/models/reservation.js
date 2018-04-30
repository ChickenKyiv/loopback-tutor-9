'use strict';

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
            Reservation.app.models.Email.send({
                    to: 'louisevdb84@gmail.com',
                    from: 'louisevdb84@gmail.com',
                    subject: 'Reservation made at ' + campground.name
                }, function (err, mail) {
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
