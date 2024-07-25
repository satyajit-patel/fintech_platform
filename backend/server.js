const express = require('express');
const { port } = require('./config/config');
const transactionRoutes = require('./routes/transactionRoutes.js');

const app = express();

app.use(express.json());
app.use('/api/v1', transactionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
