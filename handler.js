'use strict';

module.exports.getProduct = (event, context, callback) => {

  // Do work to retrieve Product
  const product = retrieveProduct(event);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: "Sample Message"
    }),
  };

  callback(null, response);
};

module.exports.hello = (event, context, callback) => {

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: "Hello World"
    }),
  };

  callback(null, response);
};

// addNumbers endpoint
module.exports.addNumbers = (event, context, callback) => {
  const body = JSON.parse(event.body);  // Parse the incoming request body
  const num1 = body.num1;
  const num2 = body.num2;

  // Calculate the sum of the two numbers
  const sum = num1 + num2;

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      result: sum
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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product: product
    }),
  };

  callback(null, response);
};
