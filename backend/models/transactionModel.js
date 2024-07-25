const axios = require('axios');
const { hasuraEndpoint, hasuraSecret } = require('../config/config');

const makeDeposit = async (accountId, amount) => {
  const query = `
    mutation ($accountId: Int!, $amount: Float!) {
      insert_transactions(objects: {account_id: $accountId, amount: $amount, type: "deposit"}) {
        returning {
          id
        }
      }
      update_accounts(where: {id: {_eq: $accountId}}, _inc: {balance: $amount}) {
        returning {
          balance
        }
      }
    }
  `;
  const variables = { accountId, amount };

  const response = await axios.post(
    hasuraEndpoint,
    { query, variables },
    {
      headers: {
        'x-hasura-admin-secret': hasuraSecret,
      },
    }
  );

  return response.data;
};

module.exports = {
  makeDeposit,
};
