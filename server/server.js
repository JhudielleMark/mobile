// server.js
const express = require('express');
const mongoose = require('mongoose');
const QRCode = require('qrcode');
const app = express();
const PORT = 5000;

app.use(express.json());  // To parse JSON bodies

// Connect to MongoDB
mongoose.connect('your_mongodb_uri', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Item Schema
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  qrCodeUrl: String,
});

const Item = mongoose.model('Item', itemSchema);

// Route to add a new item
app.post('/add-item', async (req, res) => {
  try {
    const { name, description } = req.body;
    const itemData = `${name}-${description}-${Date.now()}`;
    
    // Generate QR Code
    const qrCodeUrl = await QRCode.toDataURL(itemData);

    // Save item with QR Code URL to MongoDB
    const item = new Item({ name, description, qrCodeUrl });
    await item.save();

    res.status(200).json({ message: 'Item added', item });
  } catch (error) {
    res.status(500).json({ message: 'Error adding item', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
