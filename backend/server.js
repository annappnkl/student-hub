const express = require('express');
const app = express();
const PORT = 5000;

// ✅ Manually handle CORS preflight
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ message: "CORS preflight OK" }); // ✅ JSON!
  }

  next();
});


app.use(express.json());

app.post('/save-to-hub', (req, res) => {
  console.log('📩 Data received from extension:');
  console.log(req.body);
  res.status(200).json({ message: "✅ Data received successfully" });

});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.status(200).json({ message: "Backend is running!" });
});