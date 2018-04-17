'use strict';

module.exports = function(Customer) {
    try {
        //add code here
      } catch (err) {
        console.trace(err);
        Raven.captureException(err);
        process.exit(1); // fatal
      }
};
