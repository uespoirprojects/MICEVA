import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate EmailJS sending
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="animate-fadeInUp">Contactez-nous</h1>
          <p className="hero-subtitle animate-fadeInUp">Nous sommes à votre écoute pour toute question ou soutien</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container contact-grid">
          {/* Info Column */}
          <div className="contact-info animate-slideInLeft">
            <div className="info-card">
              <h3>Nos Coordonnées</h3>
              <p className="info-intro">N'hésitez pas à nous contacter par téléphone, email ou en nous rendant visite.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <h4>Adresse</h4>
                    <p>12, Rue des Miracles, Port-au-Prince, Haïti</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <h4>Téléphone</h4>
                    <p>+509 3700-0000 / +509 3100-0000</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <h4>Email</h4>
                    <p>contact@miceva.org</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">🕒</span>
                  <div>
                    <h4>Horaires</h4>
                    <p>Lundi - Vendredi : 8h00 - 17h00</p>
                  </div>
                </div>
              </div>

              <div className="info-map-placeholder">
                <div className="map-overlay">
                  <span>MICEVA Haïti</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrapper animate-fadeInUp">
            <div className="form-card">
              <h3>Envoyez-nous un message</h3>
              
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h4>Message envoyé !</h4>
                  <p>Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-gold-small">Envoyer un autre message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder=" "
                    />
                    <label htmlFor="name">Nom complet</label>
                  </div>

                  <div className="form-group">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder=" "
                    />
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="form-group">
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                      placeholder=" "
                    />
                    <label htmlFor="subject">Sujet</label>
                  </div>

                  <div className="form-group">
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      placeholder=" "
                      rows="5"
                    ></textarea>
                    <label htmlFor="message">Votre message</label>
                  </div>

                  <button type="submit" className="btn btn-gold btn-full">Envoyer le message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
