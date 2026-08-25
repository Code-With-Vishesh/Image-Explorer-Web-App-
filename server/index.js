const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

// Basic CORS for local testing (adjust for production)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Unsplash proxy endpoint
// Expects environment variable UNSPLASH_ACCESS_KEY (Client ID)
app.get('/api/unsplash/search', async (req, res) => {
  try {
    const q = req.query.query || req.query.q || '';
    const page = parseInt(req.query.page || '1', 10) || 1;
    if (!q) return res.status(400).json({ error: 'query missing' });
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;
    if (!accessKey) return res.status(500).json({ error: 'Unsplash key not configured' });

    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&page=${page}&per_page=20`;
    const r = await fetch(url, { headers: { Authorization: `Client-ID ${accessKey}` } });
    if (!r.ok) {
      const text = await r.text();
      return res.status(r.status).json({ error: 'Unsplash error', details: text });
    }
    const data = await r.json();
    return res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'proxy error' });
  }
});

app.listen(port, () => console.log(`Unsplash proxy listening on http://localhost:${port}`));
