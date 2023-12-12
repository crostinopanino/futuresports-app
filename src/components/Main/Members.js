import React, { useState } from 'react';
import Table from './Table.js'; 
import Form from './Form.js'; 
import withBackground from '../Aside/withBackground.js';

const Members = () => {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);  
    const [submissionMessage, setSubmissionMessage] = useState(''); 
  
    const [formData, setFormData] = useState({
      email: { label: 'Email', type: 'email', value: '', placeholder: 'Enter Email' },
      name: { label: 'Name', type: 'text', value: '', placeholder: 'Full Name' },
      newsletter: { label: 'Subscribe to our newsletter!', type: 'checkbox', checked: false },
    });
  
  // Event handlers
  const handleRegisterClick = () => {
    setShowRegistrationForm(true);
    setFormSubmitted(false);
  };

  const handleCloseForm = () => {
    setShowRegistrationForm(false);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? { ...formData[name], checked } : { ...formData[name], value }
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email.value,
          name: formData.name.value,
          newsletter: formData.newsletter.checked  // Adjusted for the checkbox
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        setSubmissionMessage("Thank you for registering.");
        setFormSubmitted(true);
          // Reset form fields
          setFormData({
            name: { ...formData.name, value: '' },
            email: { ...formData.email, value: '' },
            message: { ...formData.message, value: '' }
          });
        } else {
            setSubmissionMessage('Registration failed. Please try again.');
          }
        } catch (error) {
          setSubmissionMessage('An error occurred. Please try again.');
        } finally {
          setIsSubmitting(false);
          setShowRegistrationForm(false); 
        }
      };
  
      return (
        <section id="members" className="members-section">
          <h2>Members</h2>
          <h3>Members Only Events</h3>
          <p>Description about the members only events...</p>
          
          <Table headers={['Event Type', 'Date', 'Location', 'Register']} data={memberEvents} renderRow={renderRow} onRegisterClick={handleRegisterClick} />
    
          {showRegistrationForm && !formSubmitted && (
            <div className="modal">
              <Form
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleFormSubmit}
                buttonLabel={isSubmitting ? 'Registering...' : 'Register'}
              />
              <button className="btn close-modal" onClick={handleCloseForm}>Close</button>
            </div>
          )}
    
          {formSubmitted && (
            <div className="thank-you-message">
              <p>{submissionMessage}</p>
            </div>
          )}
        </section>
      );
    };

  const memberEvents = [
    { eventType: 'Members Event', date: '21 November', location: 'Club Ground', canRegister: true },
    { eventType: 'Fundraiser', date: '27 November', location: 'Club Ground', canRegister: false },
    { eventType: 'Members Holiday Event', date: '21 December', location: 'Club Ground', canRegister: true},
    { eventType: 'Members Christmas', date: '27 December', location: 'Club Ground', canRegister: true}
  ];

  // Function to render table rows for member events
  const renderRow = (event, index, onRegisterClick) => (
    <tr key={index}>
      <td>{event.eventType}</td>
      <td>{event.date}</td>
      <td>{event.location}</td>
      <td>
        {event.canRegister ? (
          <button className="register-button" onClick={onRegisterClick}>
            Register
          </button>
        ) : (
          'Full'
        )}
      </td>
    </tr>
  );


export default withBackground(Members);