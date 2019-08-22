/*
Helper functions
*/

// Server functions 
const jwt = require('express-jwt');
const getPublicKey = require('./lib/getPublicKey');

module.exports = {
  foo: function () {
    console.log("foo() function")
  },
  jwtCheck: function () {
    return jwt({
      secret: getPublicKey(env('AUTH0_DOMAIN')),
      audience: env('RESOURCE_SERVER'),
      algorithms: ['RS256'],
      issuer: `https://${env('AUTH0_DOMAIN')}/`
    })
  }
}

// Client functions 


// function helloWorld() {
//     return "Hello World!"
// }

// module.exports = {
//   helloWorld: helloWorld,
//   anotherStr: anotherStr
// }