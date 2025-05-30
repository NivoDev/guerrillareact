import React, { useState } from 'react';
import '../styles/newsletter.css';

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/nivo/google_sheets/DrQnzFtwVZkhWHln?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [formData.name, formData.email, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      console.log('Form submission response:', response);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="newsletter-success">
        <h3>Thank you for subscribing!</h3>
        <p>You'll receive our latest updates in your inbox.</p>
      </div>
    );
  }

  return (
    <div className="newsletter-container">
      <h2>Sign up to our newsletter</h2>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="newsletter-form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="newsletter-form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>
        <button 
          type="submit" 
          className="newsletter-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              Subscribing
              <span className="loading-spinner" />
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup; 