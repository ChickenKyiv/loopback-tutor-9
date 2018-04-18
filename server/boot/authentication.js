'use strict';

module.exports = function enableAuthentication(server) {
    try {
        server.enableAuth();
      } catch (err) {
        console.trace(err);
        Raven.captureException(err);        
      } 
    
}