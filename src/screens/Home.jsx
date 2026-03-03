import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    { value: 500, label: "familles touchées", prefix: "+ de " },
    { value: 3, label: "puits forés", prefix: "" },
    { value: 200, label: "paysans formés", prefix: "+ de " },
    { value: 1, label: "clinique communautaire", prefix: "" },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fadeInUp">
          <p className="hero-tagline">Mission MICEVA</p>
          <h1>Servir. Bâtir. Transformer.</h1>
          <p className="hero-subtitle">
            La Mission MICEVA s'engage pour les communautés haïtiennes à travers l'Évangile, l'éducation et l'action sociale.
          </p>
          <div className="hero-btns">
            <Link to="/apropos" className="btn btn-gold">Découvrir la mission</Link>
            <Link to="/realisations" className="btn btn-outline">Nos réalisations</Link>
          </div>
          <div className="hero-verse">
            <div className="verse-line"></div>
            <p>
              "Car je connais les projets que j'ai formés sur vous, dit l'Éternel." 
              <span>— Jérémie 29:11</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <h3 className="stat-number">
                  {stat.prefix}
                  <Counter value={stat.value} visible={statsVisible} />
                </h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intervention Domains */}
      <section className="domains">
        <div className="container">
          <div className="section-title">
            <p>Ce que nous faisons</p>
            <h2>Nos Domaines d'Action</h2>
          </div>
          <div className="domains-grid">
            <div className="domain-card">
              <div className="domain-icon">🕊️</div>
              <h3>Évangélisation</h3>
              <p>Annoncer la Bonne Nouvelle dans toutes les communautés pour une transformation spirituelle durable.</p>
              <div className="domain-border"></div>
            </div>
            <div className="domain-card">
              <div className="domain-icon">📚</div>
              <h3>Éducation & Formation</h3>
              <p>Former les paysans et les jeunes pour un avenir meilleur et une autonomie économique.</p>
              <div className="domain-border"></div>
            </div>
            <div className="domain-card">
              <div className="domain-icon">🏥</div>
              <h3>Santé Communautaire</h3>
              <p>Apporter des soins de base et de la prévention à ceux qui n'ont pas accès aux structures médicales.</p>
              <div className="domain-border"></div>
            </div>
            <div className="domain-card">
              <div className="domain-icon">💧</div>
              <h3>Eau & Assainissement</h3>
              <p>Forer des puits et installer des pompes pour garantir l'accès à l'eau potable en zone rurale.</p>
              <div className="domain-border"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="pastor">
        <div className="container pastor-container">
          <div className="pastor-image-wrapper">
            <div className="pastor-avatar">
              <div className="avatar-placeholder">EL</div>
              <div className="avatar-ring"></div>
            </div>
          </div>
          <div className="pastor-content">
            <p className="pastor-tag">Notre Responsable</p>
            <h3>Pasteur Eris Labady</h3>
            <p className="pastor-title">Fondateur & Responsable de la Mission</p>
            <div className="pastor-divider"></div>
            <blockquote className="pastor-quote">
              "La vision sans action est un rêve. L'action sans vision est un passe-temps. Mais la vision avec l'action peut changer le monde."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-content">
          <h2>Rejoignez notre mission</h2>
          <p>Votre soutien transforme des vies et bâtit l'avenir de nos communautés.</p>
          <Link to="/contact" className="btn btn-gold">Nous contacter</Link>
        </div>
      </section>
    </div>
  );
};

const Counter = ({ value, visible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, visible]);

  return <span>{count}</span>;
};

export default Home;
