import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, GraduationCap } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-line"></div>
      <div className="container footer-container">

        <div className="footer-info">
          <Link to="/" className="footer-logo">
            <span className="logo-main">MICEVA</span>
            <span className="logo-sub">Chapelle Évangélique Vision en Action</span>
          </Link>
          <p className="footer-desc">
            La Mission Chapelle Évangélique Vision en Action — implantée à Puits-Salé, commune d'Aquin,
            depuis 1978. Une œuvre génératrice d'ouvriers pour former des serviteurs, édifier des familles
            et transformer les communautés haïtiennes par l'Évangile.
          </p>
          <div className="footer-verse">
            <span>"Car nous sommes son ouvrage, ayant été créés en Jésus-Christ pour de bonnes oeuvres, que Dieu a préparées d'avance, afin que nous les pratiquions." — Éphésiens 2:10</span>
          </div>
          <div className="footer-axes">
            <span>🙏 Adoration</span>
            <span>🕊️ Évangélisation</span>
            <span>📚 Éducation</span>
            <span>🤝 Service</span>
          </div>
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
            <li>
              <MapPin size={15} strokeWidth={2} className="footer-icon" />
              Puits-Salé, commune d'Aquin, Sud d'Haïti
            </li>
            <li>
              <Phone size={15} strokeWidth={2} className="footer-icon" />
              +509 3700-0000 / +509 3100-0000
            </li>
            <li>
              <Mail size={15} strokeWidth={2} className="footer-icon" />
              contact@miceva.org
            </li>
            <li>
              <Clock size={15} strokeWidth={2} className="footer-icon" />
              Lun – Ven : 8h00 – 17h00
            </li>
            <li>
              <GraduationCap size={15} strokeWidth={2} className="footer-icon" />
              Partenaire : Université Espoir de Calvary Chapel
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Mission Chapelle Évangélique Vision en Action (MICEVA). Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;