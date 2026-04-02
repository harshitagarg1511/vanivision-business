import { useState } from 'react';
import './Contact.css';

const whatsappNumbers = ['7828880806', '7974861959'];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [selectedNumber, setSelectedNumber] = useState(whatsappNumbers[0]);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    else if (formData.fullName.trim().length < 2) newErrors.fullName = 'Enter at least 2 characters.';

    if (!formData.email.trim()) newErrors.email = 'Email Address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = 'Enter a valid email.';

    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
    else if (!/^\d{10}$/.test(formData.phone.trim())) newErrors.phone = 'Enter a 10-digit number.';

    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters.';

    return newErrors;
  };

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatusMessage('');
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage('Please fix form errors before submitting.');
      return;
    }

    setIsSubmitting(true);
    const structuredMessage = `*New Contact Request*\n\n*Name:* ${formData.fullName.trim()}\n*Email:* ${formData.email.trim()}\n*Phone:* ${formData.phone.trim()}\n*Message:* ${formData.message.trim()}`;

    const targetNumber = selectedNumber || whatsappNumbers[0];
    const whatsappURL = `https://wa.me/${targetNumber}?text=${encodeURIComponent(structuredMessage)}`;

    setStatusMessage('Redirecting to WhatsApp...');

    setTimeout(() => {
      window.location.href = whatsappURL;
    }, 300);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-content">
          <p className="hero-overline">Contact Us</p>
          <h1>Let’s Build Something Great Together</h1>
          <p className="hero-subtitle">Share your idea and we’ll help turn it into a premium digital experience. Fast response, professional support.</p>
        </div>
      </section>

      <section className="contact-card">
        <div className="contact-left">
          <h2>Get in touch</h2>
          <p>Choose the number you prefer and submit your details. You will be redirected to WhatsApp with a structured message.</p>

          <div className="whatsapp-list">
            {whatsappNumbers.map((num) => (
              <button
                key={num}
                type="button"
                className={`whatsapp-option ${selectedNumber === num ? 'active' : ''}`}
                onClick={() => setSelectedNumber(num)}
              >
                +91 {num}
              </button>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange('fullName')}
              className={errors.fullName ? 'invalid' : ''}
              required
            />
            <label htmlFor="fullName">Full Name</label>
            {errors.fullName && <p className="field-error">{errors.fullName}</p>}
          </div>

          <div className="form-group">
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              className={errors.email ? 'invalid' : ''}
              required
            />
            <label htmlFor="email">Email Address</label>
            {errors.email && <p className="field-error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange('phone')}
              className={errors.phone ? 'invalid' : ''}
              required
            />
            <label htmlFor="phone">Phone Number</label>
            {errors.phone && <p className="field-error">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange('message')}
              className={errors.message ? 'invalid' : ''}
              required
            />
            <label htmlFor="message">Message</label>
            {errors.message && <p className="field-error">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Preparing WhatsApp...' : 'Send Message via WhatsApp'}
          </button>

          {(statusMessage || Object.keys(errors).length > 0) && (
            <p className={`status-message ${Object.keys(errors).length ? 'error' : 'success'}`}>
              {statusMessage}
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;

