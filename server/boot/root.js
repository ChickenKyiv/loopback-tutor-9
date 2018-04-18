'use strict';

module.exports = function (server) {
  try {
    // Install a `/` route that returns server status
    var router = server.loopback.Router();
    router.get('/', server.loopback.status());
    server.use(router);
  } catch (err) {
    console.trace(err);
    Raven.captureException(err);    
  }  
};
