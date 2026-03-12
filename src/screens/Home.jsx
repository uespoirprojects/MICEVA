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
    { value: new Date().getFullYear() - 1978, label: "ans au service des communautés", prefix: " " },
    { value: 4, label: "axes de mission", prefix: "" },
    { value: 3, label: "filières universitaires", prefix: "" },
    { value: 1, label: "partenariat universitaire", prefix: "" },
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
            Depuis 1978, la Mission Chapelle Évangélique Vision en Action s'engage à glorifier Dieu,
            former des disciples et transformer les communautés haïtiennes par l'Évangile, l'éducation et l'action sociale.
          </p>
          <div className="hero-btns">
            <Link to="/apropos" className="btn btn-gold">Découvrir la mission</Link>
            <Link to="/realisations" className="btn btn-outline">Nos réalisations</Link>
          </div>
          <div className="hero-verses">
            <div className="hero-verse-card">
              <span className="verse-ref">Éphésiens 2:10</span>
              <div className="verse-divider"></div>
              <p>"Car nous sommes son ouvrage, ayant été créés en Jésus-Christ pour de bonnes oeuvres, que Dieu a préparées d'avance, afin que nous les pratiquions."</p>
            </div>
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
            <h2>Nos Quatre Axes de Mission</h2>
          </div>
          <div className="domains-grid">
            <div className="domain-card">
              <div className="domain-icon">🙏</div>
              <h3>Adoration</h3>
              <p>Cultiver une vie de louange centrée sur Dieu, ancrée dans la Parole et la prière communautaire pour une communauté enracinée dans la foi.</p>
              <div className="domain-border"></div>
            </div>
            <div className="domain-card">
              <div className="domain-icon">🕊️</div>
              <h3>Évangélisation</h3>
              <p>Proclamer l'Évangile et témoigner de la foi selon Actes 1:8 — former, affermir et envoyer des serviteurs pour atteindre toutes les communautés.</p>
              <div className="domain-border"></div>
            </div>
            <div className="domain-card">
              <div className="domain-icon">📚</div>
              <h3>Éducation</h3>
              <p>Former bibliquement, intellectuellement et moralement — des écoles communautaires en partenariat avec l'Université Espoir de Calvary Chapel.</p>
              <div className="domain-border"></div>
            </div>
            <div className="domain-card">
              <div className="domain-icon">🤝</div>
              <h3>Service</h3>
              <p>Manifester l'amour du Christ par l'entraide sociale, l'accès à l'eau potable, la santé communautaire et la protection de l'environnement.</p>
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
              "MICEVA se veut un espace de croissance spirituelle, de maturité chrétienne et de multiplication de disciples — une œuvre génératrice d'ouvriers pour le Royaume."
            </blockquote>
            <p className="pastor-location">
              Fondée à Puits-Salé, commune d'Aquin, Sud d'Haïti — automne 1978
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="container about-preview-container">
          <div className="about-preview-content">
            <div className="section-title left-align">
              <p>Qui nous sommes</p>
              <h2>Une Œuvre Holistique depuis 1978</h2>
            </div>
            <p className="about-text">
              La Mission Chapelle Évangélique Vision en Action (MICEVA) a été implantée à l'automne 1978
              dans la localité rurale de Puits-Salé, commune d'Aquin. À cette époque, la zone était marquée
              par l'isolement, le manque d'infrastructures éducatives et l'absence d'encadrement spirituel structuré.
            </p>
            <p className="about-text">
              Dès ses débuts, MICEVA s'est définie non comme une mission parallèle, mais comme une
               œuvre génératrice d'ouvriers — un espace où des hommes et des femmes seraient
              formés, affermis et envoyés pour servir le Royaume.
            </p>
            <div className="about-verses">
              <span className="verse-pill">Jean 3:16</span>
              <span className="verse-pill">Romains 10:14–15</span>
              <span className="verse-pill">Matthieu 20:26</span>
              <span className="verse-pill">1 Pierre 1:15 ; 2:12 ; 3:15–16</span>
            </div>
            <Link to="/apropos" className="btn btn-gold">En savoir plus</Link>
          </div>
          <div className="about-preview-visual">
            <div className="visual-card main-card">
              <div className="visual-year">1978</div>
              <p>Implantation à Puits-Salé, Aquin</p>
            </div>
            <div className="visual-card secondary-card">
              <div className="visual-icon">🎓</div>
              <p>Partenariat Université Espoir de Calvary Chapel</p>
            </div>
            <div className="visual-card tertiary-card">
              <div className="visual-icon">💧</div>
              <p>Accès à l'eau potable</p>
            </div>
            <div className="visual-card quaternary-card">
              <div className="visual-icon">🌳</div>
              <p>Reboisement & environnement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-content">
          <h2>Rejoignez notre mission</h2>
          <p>
            Votre soutien transforme des vies, bâtit l'avenir de nos communautés
            et glorifie Dieu dans le Sud d'Haïti et au-delà.
          </p>
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