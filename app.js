require('dotenv').config({ silent: true });

const server = require('./server');
const app = require('./server/express');
const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

/**
 * Start up the Express server and listen on port for events
 */

server.then(app => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Watson Discovery Prototype running on port: %d', port);
  });
});
