import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-line"></div>
      <div className="container footer-container">
        <div className="footer-info">
          <Link to="/" className="footer-logo">
            <span className="logo-main">MICEVA</span>
            <span className="logo-sub">Vision en Action</span>
          </Link>
          <p className="footer-desc">
            Une mission chrétienne engagée pour la transformation spirituelle et sociale des communautés en Haïti.
          </p>
        </div>

        <div className="footer-links">
          <h4>Liens Rapides</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/apropos">À propos</Link></li>
            <li><Link to="/realisations">Réalisations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>📍 Port-au-Prince, Haïti</li>
            <li>📞 +509 3700-0000</li>
            <li>✉️ contact@miceva.org</li>
            <li>🕒 Lun - Ven: 8h - 17h</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 MICEVA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
