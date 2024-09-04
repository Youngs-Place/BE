const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/data', dataRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
