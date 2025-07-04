const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/portfolio-site', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

// Mongoose Schema
const Contact = require('./models/Contact');

// Test route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Combined Contact POST route
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("📥 Contact saved to DB:", newContact);

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact Form: ${name}`,
      text: `
        You received a new message from your portfolio website:
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("📧 Email sent");

    res.status(200).json({ message: 'Message sent and saved successfully!' });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ message: 'Failed to send or save message.', error: error.message });
  }
});


// GET all contact messages
app.get('/contacts', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(messages);
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);
    res.status(500).json({ message: "Failed to retrieve contacts." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
