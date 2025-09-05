import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await  fetch('http://localhost:5000/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
      });


      const result = await response.json();
      if (response.ok) {
        setSuccess(true);
        setResponseMessage(result.message || 'Message sent successfully!');
      } else {
        setSuccess(false);
        setResponseMessage(result.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccess(false);
      setResponseMessage('Failed to connect to server.');
    }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-3 font-medium text-white transition bg-blue-600 shadow-md rounded-xl hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        {responseMessage && (
          <p
            className={`mt-4 text-center font-medium ${
              success ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {responseMessage}
          </p>
        )}
      </div>
    </section>
  );
}
