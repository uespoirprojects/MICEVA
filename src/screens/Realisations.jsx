import { useState } from 'react';
import { MapPin } from 'lucide-react';
import './Realisations.css';

const Realisations = () => {
  const [filter, setFilter] = useState('Tout');

  const categories = ['Tout', 'Évangélisation', 'Éducation', 'Santé', 'Eau & Assainissement', 'Environnement'];

  const projects = [
    {
      id: 1,
      category: 'Évangélisation',
      title: "Implantation de MICEVA",
      location: "Puits-Salé, commune d'Aquin, Sud d'Haïti",
      year: "1978",
      desc: "Établissement d'une œuvre évangélique centrée sur la proclamation du salut en Jésus-Christ et la formation de disciples dans une zone marquée par l'isolement.",
      color: "linear-gradient(135deg, #1e3a5f, #2d4a72)"
    },
    {
      id: 2,
      category: 'Évangélisation',
      title: "Multiplication des disciples",
      location: "Stations de MICEVA, Sud d'Haïti",
      year: "Depuis 1978",
      desc: "Formation, affermissement et envoi d'hommes et de femmes comme ouvriers pour servir le Royaume de Dieu à travers les communautés haïtiennes.",
      color: "linear-gradient(135deg, #1e3a5f, #2d4a72)"
    },
    {
      id: 3,
      category: 'Éducation',
      title: "Écoles & Formation biblique",
      location: "Puits-Salé et stations associées",
      year: "Depuis 1978",
      desc: "Enseignement biblique structuré, formation de leaders locaux et accompagnement des familles pour bâtir une communauté chrétienne exemplaire.",
      color: "linear-gradient(135deg, #27ae60, #2ecc71)"
    },
    {
      id: 4,
      category: 'Éducation',
      title: "Partenariat Université Espoir de Calvary Chapel",
      location: "Haïti",
      year: "En cours",
      desc: "Accès à l'enseignement supérieur pour les jeunes des communautés desservies : Computer Science, Comptabilité et Administration des Affaires.",
      color: "linear-gradient(135deg, #8e44ad, #9b59b6)"
    },
    {
      id: 5,
      category: 'Eau & Assainissement',
      title: "Accès à l'eau potable",
      location: "Communautés rurales desservies",
      year: "En cours",
      desc: "Installation de systèmes d'approvisionnement en eau dans des communautés dépourvues de sources sécurisées, pour garantir une eau saine aux familles.",
      color: "linear-gradient(135deg, #3498db, #2980b9)"
    },
    {
      id: 6,
      category: 'Environnement',
      title: "Reboisement & Protection de l'environnement",
      location: "Zones rurales d'Haïti",
      year: "En cours",
      desc: "Campagnes de plantation d'arbres, lutte contre l'érosion des sols et sensibilisation écologique des communautés rurales.",
      color: "linear-gradient(135deg, #27ae60, #1e8449)"
    },
    {
      id: 7,
      category: 'Santé',
      title: "Formation en santé communautaire",
      location: "Stations de MICEVA",
      year: "En cours",
      desc: "Prévention, hygiène et formation d'agents de santé locaux pour améliorer les conditions sanitaires des communautés vulnérables.",
      color: "linear-gradient(135deg, #e74c3c, #c0392b)"
    },
    {
      id: 8,
      category: 'Santé',
      title: "Actions d'entraide sociale",
      location: "Communautés desservies",
      year: "En cours",
      desc: "Soutien aux familles en difficulté, accompagnement des personnes âgées et interventions d'urgence lors de crises pour manifester l'amour du Christ.",
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
          <p className="hero-subtitle animate-fadeInUp">
            Depuis 1978, l'impact concret de la mission MICEVA dans les communautés haïtiennes
          </p>
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
                </div>
                <div className="project-content">
                  <span className="project-year">{project.year}</span>
                  <h3>{project.title}</h3>
                  <p className="project-location">
                    <MapPin size={13} strokeWidth={2.2} className="location-icon" />
                    {project.location}
                  </p>
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