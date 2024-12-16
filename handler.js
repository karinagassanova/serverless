'use strict';
const axios = require('axios');

module.exports.tokenHandler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    const { bfid, username, password } = requestBody;

    if (!username || !password || !bfid) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Username, password, and bfid are required' })
      };
    }

    // Create Basic Auth header
    const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;

    // Make POST request to external API
    const response = await axios.post(
        'https://secure-cert.shieldconex.com/api/tokenization/read',
        { bfid: bfid }, // Payload
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader
          }
        }
    );

    // Return the response
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data)
    };

  } catch (error) {
    // Handle error response
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

module.exports.detokenizeHandler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    const { bfid, values, username, password } = requestBody;

    if (!bfid || !values || !username || !password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'bfid, values, username, and password are required' })
      };
    }

    // Create Basic Auth header
    const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;
    console.log("Test",bfid,values)

    // Make POST request to external API
    const response = await axios.post(
        'https://secure-cert.shieldconex.com/api/tokenization/detokenize',

        { bfid, values },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader
          }
        }
    );

    // Return the detokenized data
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data)
    };

  } catch (error) {
    // Handle error response
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
