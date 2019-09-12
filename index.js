/*
Will slowly start to transfer all helper functions to this file. 
Will eventually become m2m npm package
*/

// Server modules
const jwt = require('express-jwt');
const getPublicKey = require('./getPublicKey');

//Client modules
var request = require('request');
var env = require('./env');
var logger = require('./logger');

require('dotenv').config();

module.exports = {
  foo: function () {
    console.log("foo() function")
  },

  /*
  SERVER FUCNTIONS
  */

  jwtCheck: function () {
    return jwt({
      secret: getPublicKey(process.env.AUTH0_DOMAIN),
      audience: process.env.RESOURCE_SERVER,
      algorithms: ['RS256'],
      issuer: `https://${process.env.AUTH0_DOMAIN}/`
    })
  },

  /* 
  CLIENT FUCNTIONS 
  */

  getAccessToken: function (callback) {
    if (!process.env.AUTH0_DOMAIN) {
      callback(new Error('The AUTH0_DOMAIN is required in order to get an access token (verify your configuration).'));
    }

    console.debug('Fetching access token from https://' + process.env.AUTH0_DOMAIN + '/oauth/token');

    var options = {
      method: 'POST',
      url: 'https://' + process.env.AUTH0_DOMAIN + '/oauth/token',
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json'
      },
      body: {
        audience: process.env.RESOURCE_SERVER,
        grant_type: 'client_credentials',
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET
      },
      json: true
    };

    request(options, function (err, res, body) {
      if (err || res.statusCode < 200 || res.statusCode >= 300) {
        return callback(res && res.body || err);
      }

      callback(null, body.access_token);
    });
  }
}

