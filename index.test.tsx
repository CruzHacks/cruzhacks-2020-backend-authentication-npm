// const helper = require("../worldmappers-api-nodejs/lib/helper");
// import index from 'index';
// import dotenv from 'dotenv';
// require('./index.js')
// import "./index";
const index = require('./index.js')
const request = require("request");

require('dotenv').config();

// jest.setTimeout(30000);

describe('Environment Variables', () => {
  test('api key set', () => {
    expect(process.env.AUTH0_DOMAIN).toBeDefined();
    expect(process.env.RESOURCE_SERVER).toBeDefined();
    //client
    expect(process.env.AUTH0_CLIENT_ID).toBeDefined();
    expect(process.env.AUTH0_CLIENT_SECRET).toBeDefined();
  });
});

describe('Callback Response', () => {

  test("response for jwtCheck()", async () => {
     expect( await index.jwtCheck()).toBeDefined();
  });

  //TODO add test for fail jwtcheck

  test('response for getAccessToken()', async () => {
    await index.getAccessToken(function(err, res, accessToken) {
      var options = {
        url: "https://dev-x81sw4bv.auth0.com/", //change to cruzhacks
        headers: {
          Authorization: "Bearer " + accessToken
        }
      };
      request.get(options, (err, res, body) => {
        expect(res.statusCode).toBe(200);
      });
    });
  });
});