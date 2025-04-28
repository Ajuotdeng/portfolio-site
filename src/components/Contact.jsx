import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(null); // Added here

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccess(false);
    }

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen bg-white p-8 pt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-2xl shadow space-y-4"
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
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700">
          Send Message
        </button>
      </form>

      {/* Optional: display a success or error message */}
      {success === true && (
        <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
      )}
      {success === false && (
        <p className="text-red-600 text-center mt-4">Failed to send message. Please try again.</p>
      )}
    </section>
  );
}
