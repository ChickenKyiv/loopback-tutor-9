'use strict';

module.exports = function (Campground) {
    try {
        Campground.validatesLengthOf('name', { max: 100, message: { max: 'Name is too long' } });
      } catch (err) {
        console.trace(err);
        Raven.captureException(err);        
      }
};
