const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db');
const port = process.env.PORT || 8080;
const chargingStationRoutes = require('./routes/chargingStations');

app.use(express.json()); // for parsing JSON bodies

// Root route
app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

// DB test route
app.get('/test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.send(result.rows[0]);
  } catch (err) {
    res.status(500).send('Error connecting to database: ' + err.message);
  }
});

// Charging Station Routes
app.use('/api/charging-stations', chargingStationRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
