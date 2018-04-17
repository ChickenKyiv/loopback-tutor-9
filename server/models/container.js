'use strict';

module.exports = function(Container) {
    try {
        //add code here
      } catch (err) {
        console.trace(err);
        Raven.captureException(err);        
      }
};
