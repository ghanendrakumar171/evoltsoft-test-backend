const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all charging stations
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM evolesoft.charging_stations');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET charging station by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM evolesoft.charging_stations WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Station not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Simulate polling for status update
router.get('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const statuses = ['available', 'busy', 'maintenance'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    await pool.query('UPDATE evolesoft.charging_stations SET status = $1 WHERE id = $2', [randomStatus, id]);
    const updated = await pool.query('SELECT * FROM evolesoft.charging_stations WHERE id = $1', [id]);
    res.json(updated.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
