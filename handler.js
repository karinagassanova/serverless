'use strict';
const https = require('https');

module.exports.postToWebhook = (event, context, callback) => {
  const postData = JSON.stringify({ key: 'value' }); // Customize the payload if needed

  const options = {
    hostname: 'webhook.site',
    port: 443,
    path: '/16231f4c-21bb-4de0-902e-62ed4de07610/test',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      const response = {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: "POST request completed successfully",
          result: JSON.parse(data)
        }),
      };

      callback(null, response);
    });
  });

  req.on('error', (e) => {
    const response = {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: "Error occurred",
        error: e.message
      }),
    };

    callback(null, response);
  });

  req.write(postData);
  req.end();
};
module.exports.getProduct = (event, context, callback) => {

  // Do work to retrieve Product
  const product = retrieveProduct(event);

  const response = {
    statusCode: 200,
    headers: {
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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product: product
    }),
  };

  callback(null, response);
};
