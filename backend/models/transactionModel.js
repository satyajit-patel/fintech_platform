const axios = require('axios');
const { hasuraEndpoint, hasuraSecret } = require('../config/config');

const makeDeposit = async (accountId, amount) => {
  // Define the GraphQL mutation query using backticks
  const query = `
    mutation ($accountId: Int!, $amount: numeric!) {
      insert_fintechDB(objects: {accountId: $accountId, amount: $amount}) {
        returning {
          accountId
        }
      }
    }
  `;

  // Define the variables
  const variables = { accountId, amount };

  try {
    // Make the HTTP request to Hasura
    const response = await axios.post(
      `${hasuraEndpoint}/v1/graphql`,  // Ensure the correct endpoint
      { query, variables },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': hasuraSecret,
        },
      }
    );

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error making deposit:', error.response ? error.response.data : error.message);
    throw error;
  }
};

module.exports = {
  makeDeposit,
};
