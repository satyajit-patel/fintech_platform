const { makeDeposit } = require('../models/transactionModel');

const deposit = async (req, res) => {
  const { accountId, amount } = req.body;

  try {
    const data = await makeDeposit(accountId, amount);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deposit,
};
