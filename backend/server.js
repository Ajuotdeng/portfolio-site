const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
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
app.get('/', (req, res) => res.send('🚀 Server is running...'));

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

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Portfolio Contact Form: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      return res.status(200).json({ message: 'Message sent and saved successfully!' });
    } catch (emailErr) {
      console.error('⚠ Email sending error:', emailErr.message);
      return res.status(200).json({
        message: 'Message saved, but email could not be sent.',
        emailError: emailErr.message
      });
    }
  } catch (dbError) {
    console.error('❌ Database error:', dbError);
    return res.status(500).json({
      message: 'Failed to save message to the database.',
      error: dbError.message
    });
  }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
