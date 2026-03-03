import { useState } from 'react';
import './Realisations.css';

const Realisations = () => {
  const [filter, setFilter] = useState('Tout');

  const categories = ['Tout', 'Évangélisation', 'Éducation', 'Santé', 'Eau & Assainissement'];

  const projects = [
    {
      id: 1,
      category: 'Évangélisation',
      title: "Campagne d'évangélisation",
      location: "Zone rurale de l'Artibonite",
      year: "2024",
      desc: "Une mission de 7 jours touchant plus de 10 villages isolés.",
      color: "linear-gradient(135deg, #1e3a5f, #2d4a72)"
    },
    {
      id: 2,
      category: 'Eau & Assainissement',
      title: "Forage de puits",
      location: "Localité de Mapou",
      year: "2024",
      desc: "Accès à l'eau potable pour 150 familles grâce à un nouveau forage.",
      color: "linear-gradient(135deg, #3498db, #2980b9)"
    },
    {
      id: 3,
      category: 'Éducation',
      title: "Formation agricole",
      location: "Centre MICEVA",
      year: "2024",
      desc: "80 paysans formés aux techniques de culture durable.",
      color: "linear-gradient(135deg, #27ae60, #2ecc71)"
    },
    {
      id: 4,
      category: 'Santé',
      title: "Clinique mobile",
      location: "3 communes desservies",
      year: "2024",
      desc: "Consultations gratuites et distribution de médicaments essentiels.",
      color: "linear-gradient(135deg, #e74c3c, #c0392b)"
    },
    {
      id: 5,
      category: 'Évangélisation',
      title: "Distribution de Bibles",
      location: "5 villages du Sud",
      year: "2023",
      desc: "Remise de 300 Bibles et sessions d'étude biblique.",
      color: "linear-gradient(135deg, #1e3a5f, #2d4a72)"
    },
    {
      id: 6,
      category: 'Eau & Assainissement',
      title: "Installation de pompes",
      location: "Zone de Plaine",
      year: "2023",
      desc: "Installation de 2 pompes à bras robustes pour la communauté.",
      color: "linear-gradient(135deg, #3498db, #2980b9)"
    },
    {
      id: 7,
      category: 'Éducation',
      title: "Atelier alphabétisation",
      location: "École communautaire",
      year: "2023",
      desc: "Programme intensif pour 40 adultes de la localité.",
      color: "linear-gradient(135deg, #27ae60, #2ecc71)"
    },
    {
      id: 8,
      category: 'Santé',
      title: "Campagne de vaccination",
      location: "Zone rurale",
      year: "2023",
      desc: "Protection de 200 enfants contre les maladies infantiles.",
      color: "linear-gradient(135deg, #e74c3c, #c0392b)"
    }
  ];

  const filteredProjects = filter === 'Tout' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="realisations-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="animate-fadeInUp">Nos Réalisations</h1>
          <p className="hero-subtitle animate-fadeInUp">L'impact concret de notre mission sur le terrain</p>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-container">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card animate-fadeInUp">
                <div className="project-image" style={{ background: project.color }}>
                  <div className="project-badge">{project.category}</div>
                  <div className="project-overlay">
                    <span className="zoom-icon">🔍</span>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-year">{project.year}</span>
                  <h3>{project.title}</h3>
                  <p className="project-location">📍 {project.location}</p>
                  <p className="project-desc">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="no-results">
              <p>Aucune réalisation trouvée dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Realisations;
