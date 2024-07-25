require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  hasuraEndpoint: process.env.HASURA_ENDPOINT,
  hasuraSecret: process.env.HASURA_SECRET,
};
