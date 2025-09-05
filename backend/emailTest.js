const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmail() {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,   // use the variable name
        pass: process.env.EMAIL_PASS,   // use the variable name
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: '✅ Nodemailer Test',
      text: 'If you are reading this, Gmail + Nodemailer works!',
    });

    console.log('📧 Email sent successfully:', info.response);
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
  }
}

testEmail();