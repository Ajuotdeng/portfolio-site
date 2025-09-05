const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// MongoDB Atlas Connection
(async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
})();

// Models
const Contact = require('./models/Contact');

// Routes
app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json(contacts);
  } catch (err) {
    console.error('❌ Error fetching contacts:', err.message);
    return res.status(500).json({ message: 'Failed to fetch contacts.' });
  }
});

// Contact Route
app.post('/contact', async (req, res) => {
  console.log("📥 Data received from form:", req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newContact = await Contact.create({ name, email, message });
    console.log('📥 Contact saved:', newContact);

    // Debug environment variables
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Loaded' : 'Not loaded');

    // Create transporter and send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    console.log('📧 Email info:', info);
    return res.status(200).json({ message: 'Message sent and saved successfully!' });

  } catch (err) {
    console.error('❌ Error in /contact route:', err);
    return res.status(500).json({
      message: 'Message saved, but email could not be sent.',
      error: err.message,
      stack: err.stack       
    });
  }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
