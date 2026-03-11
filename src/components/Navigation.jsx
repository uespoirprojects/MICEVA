import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../MICEVA.png';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {mobileMenuOpen && (
        <div
          className="nav-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="container nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-img-wrapper">
            <img src={logo} alt="MICEVA Logo" className="logo-img" />
          </div>
          <div className="logo-text">
            <span className="logo-main">MICEVA</span>
            <span className="logo-sub">Chapelle Évangélique Vision en Action</span>
          </div>
        </Link>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
          <Link to="/apropos" className={location.pathname === '/apropos' ? 'active' : ''}>À propos</Link>
          <Link to="/realisations" className={location.pathname === '/realisations' ? 'active' : ''}>Réalisations</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <button className="btn-donate-mobile">Faire un don</button>
        </div>

        <div className="nav-actions">
          <button className="btn-donate">Faire un don</button>
          <button
            className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;