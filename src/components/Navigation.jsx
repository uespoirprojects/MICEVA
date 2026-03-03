import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  // Bloquer le scroll quand le menu est ouvert
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
      {/* Overlay — clic en dehors ferme le menu */}
      {mobileMenuOpen && (
        <div
          className="nav-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-main">MICEVA</span>
          <span className="logo-sub">Vision en Action</span>
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