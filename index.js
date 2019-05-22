'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
  // host: 'localhost',
  port: 3000
});

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    let obj = {
        name: 'otoka',
        message: 'hello world'
    }
    return reply(obj)
  }
});

// Start the server
async function start() {

  try {
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();
