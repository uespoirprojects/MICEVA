import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, GraduationCap } from 'lucide-react';
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
          <p className="hero-subtitle animate-fadeInUp">
            Puits-Salé, commune d'Aquin, Sud d'Haïti — Nous sommes à votre écoute
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container contact-grid">

          {/* Info Column */}
          <div className="contact-info animate-slideInLeft">
            <div className="info-card">
              <h3>Nos Coordonnées</h3>
              <p className="info-intro">
                La Mission MICEVA est implantée à Puits-Salé, commune d'Aquin, dans le Sud d'Haïti.
                N'hésitez pas à nous contacter pour toute question, partenariat ou soutien à la mission.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon">
                    <MapPin size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4>Adresse</h4>
                    <p>Puits-Salé, commune d'Aquin<br />Département du Sud, Haïti</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">
                    <Phone size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4>Téléphone</h4>
                    <p>+509 3409-2063</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">
                    <Mail size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4>Email</h4>
                    <p>contact@miceva.org</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">
                    <Clock size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4>Horaires</h4>
                    <p>Lundi – Vendredi : 8h00 – 17h00</p>
                  </div>
                </div>
              </div>

              {/* Partenariat Box */}
              <div className="info-partner-box">
                <div className="partner-icon">
                  <GraduationCap size={28} strokeWidth={1.8} />
                </div>
                <div>
                  <h4>Partenaire universitaire</h4>
                  <p>Université Espoir de Calvary Chapel</p>
                </div>
              </div>

              <div className="info-map-placeholder">
                <div className="map-overlay">
                  <MapPin size={15} strokeWidth={2.5} />
                  <span>MICEVA — Aquin, Sud d'Haïti</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrapper animate-fadeInUp">
            <div className="form-card">
              <h3>Envoyez-nous un message</h3>
              <p className="form-intro">
                Que ce soit pour soutenir la mission, poser une question ou établir un partenariat,
                nous serons heureux de vous répondre.
              </p>

              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h4>Message envoyé !</h4>
                  <p>Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-gold-small">
                    Envoyer un autre message
                  </button>
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

                  <button type="submit" className="btn btn-gold btn-full">
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>

            {/* Mission Verse */}
            {/* <div className="contact-verse">
              <p>
                "Vous serez mes témoins... jusqu'aux extrémités de la terre."
              </p>
              <span>— Actes 1:8</span>
            </div> */}
          </div>

        </div>
      </section>

      {/* 4 Axes rapide */}
      <section className="contact-axes">
        <div className="container">
          <div className="section-title">
            <p>Notre engagement</p>
            <h2>Rejoignez la Mission MICEVA</h2>
          </div>
          <div className="contact-axes-grid">
            <div className="contact-axe">
              <span>🙏</span>
              <p>Adoration</p>
            </div>
            <div className="contact-axe">
              <span>🕊️</span>
              <p>Évangélisation</p>
            </div>
            <div className="contact-axe">
              <span>📚</span>
              <p>Éducation</p>
            </div>
            <div className="contact-axe">
              <span>🤝</span>
              <p>Service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;