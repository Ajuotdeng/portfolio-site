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
      const response = await fetch('/http://0.0.0.0/0:5000/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
    })

      const result = await response.json();
      console.log('Server response:', result);

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
    <section className="min-h-screen p-8 pt-24 bg-white">
      <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl p-6 mx-auto space-y-4 shadow bg-gray-50 rounded-2xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 text-white bg-blue-600 rounded-2xl hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {/* Display server response dynamically */}
      {responseMessage && (
        <p className={`mt-4 text-center ${success ? 'text-green-600' : 'text-red-600'}`}>
          {responseMessage}
        </p>
      )}
    </section>
  );
}
