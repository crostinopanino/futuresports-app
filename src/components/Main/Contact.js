import React, { useState } from 'react';
import Form from './Form'; // Assuming Form.js is in the same directory
import withBackground from '../Aside/withBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: { label: 'Your Name', type: 'text', value: '', placeholder: 'Enter your name' },
    email: { label: 'Your Email', type: 'email', value: '', placeholder: 'Enter your email' },
    message: { label: 'Your Message', type: 'textarea', value: '', placeholder: 'Enter your message' },
    newsletter: { label: 'Subscribe to our newsletter!', type: 'checkbox', checked: false },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? { ...formData[name], checked } : { ...formData[name], value }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const payload = {
        name: formData.name.value,
        email: formData.email.value,
        message: formData.message.value
      };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
          // Handle successful response
          setSubmissionMessage("Thank you! We've received your message.");
          // Reset form fields
          setFormData({
        name: { ...formData.name, value: '' },
        email: { ...formData.email, value: '' },
        message: { ...formData.message, value: '' }
      });
        } else {
          // Handle non-successful responses
          setSubmissionMessage('Failed to send message. Please try again.');
        }
      } catch (error) {
        setSubmissionMessage('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>

      {/* Display submission message if it exists */}
      {submissionMessage && <p className="submission-message">{submissionMessage}</p>}

      {/* Render the form using the Form component */}
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonLabel={isSubmitting ? 'Sending...' : 'Send Message'}
      />
    </section>
  );
};

export default withBackground(Contact);