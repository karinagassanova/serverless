// handler.js

'use strict';

module.exports.getProduct = (event, context, callback) => {

  // Do work to retrieve Product
  const product = retrieveProduct(event);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      product: product
    }),
  };

  callback(null, response);
};

// New sample endpoint
module.exports.sample = (event, context, callback) => {

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: "Sample Message"
    }),
  };

module.exports.hello = (event, context, callback) => {

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: "Hello World"
    }),
  };

  callback(null, response);
};
module.exports.createProduct = (event, context, callback) => {

  // Do work to create Product
  const product = createProduct(event);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      product: product
    }),
  };

  callback(null, response);
};
