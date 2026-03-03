import './Apropos.css';

const Apropos = () => {
  return (
    <div className="apropos-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="watermark">MICEVA</div>
        <div className="container">
          <h1 className="animate-fadeInUp">À propos de nous</h1>
          <p className="hero-subtitle animate-fadeInUp">Notre histoire, notre mission, nos valeurs</p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="history">
        <div className="container">
          <div className="history-card">
            <div className="history-content">
              <h2>Notre Histoire</h2>
              <p>
                Fondée avec une vision profonde pour le développement intégral de l'homme, la Mission Chapelle Évangélique Vision en Action (MICEVA) a vu le jour en réponse aux besoins criants des communautés rurales en Haïti. Sous la direction du Pasteur Eris Labady, l'organisation a commencé modestement par des réunions de prière et d'évangélisation.
              </p>
              <p>
                Au fil des années, nous avons compris que l'Évangile ne pouvait être dissocié des besoins physiques et sociaux. C'est ainsi que MICEVA a élargi son champ d'action pour inclure l'éducation des paysans, l'accès aux soins de santé et l'assainissement de l'eau, devenant un pilier de soutien pour des centaines de familles.
              </p>
              <p>
                Aujourd'hui, MICEVA continue de croître, portée par la foi et la conviction que chaque action, aussi petite soit-elle, contribue à bâtir un avenir plus digne et plus juste pour le peuple haïtien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container vision-mission-grid">
          <div className="vision-card">
            {/* commentaire ici */}
             {/* {/*<div className="card-icon">👁️</div> */}
            <h3>Notre Vision</h3>
            <p>Devenir un modèle de transformation communautaire où chaque individu, fortifié par la foi, possède les outils nécessaires pour s'épanouir spirituellement, socialement et économiquement.</p>
          </div>
          <div className="mission-card">
            {/*<div className="card-icon">🎯</div>*/}
            <h3>Notre Mission</h3>
            <p>Annoncer l'Évangile de Jésus-Christ tout en œuvrant activement pour l'amélioration des conditions de vie à travers l'éducation, la santé et l'accès aux ressources vitales comme l'eau potable.</p>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="values">
        <div className="container">
          <div className="section-title">
            <p>Ce qui nous guide</p>
            <h2>Nos Valeurs Fondamentales</h2>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-num">01</span>
              <h4>Foi</h4>
              <p>La base de toute notre action repose sur notre confiance inébranlable en Dieu.</p>
            </div>
            <div className="value-item">
              <span className="value-num">02</span>
              <h4>Intégrité</h4>
              <p>Nous agissons avec transparence et honnêteté dans tous nos projets.</p>
            </div>
            <div className="value-item">
              <span className="value-num">03</span>
              <h4>Compassion</h4>
              <p>L'amour du prochain est le moteur de notre engagement social.</p>
            </div>
            <div className="value-item">
              <span className="value-num">04</span>
              <h4>Service</h4>
              <p>Se mettre au service des plus démunis est notre plus grande vocation.</p>
            </div>
            <div className="value-item">
              <span className="value-num">05</span>
              <h4>Excellence</h4>
              <p>Nous visons la qualité dans chaque puits foré et chaque formation donnée.</p>
            </div>
            <div className="value-item">
              <span className="value-num">06</span>
              <h4>Communauté</h4>
              <p>Nous croyons en la force du collectif pour transformer durablement la société.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Le Fondateur */}
      <section className="founder">
        <div className="container founder-container">
          <div className="founder-image">
            <div className="avatar-placeholder">EL</div>
            <div className="avatar-ring"></div>
          </div>
          <div className="founder-info">
            <p className="founder-tag">Le Fondateur</p>
            <h3>Pasteur Eris Labady</h3>
            <p className="founder-bio">
              Homme de foi et visionnaire, le Pasteur Eris Labady consacre sa vie au service de Dieu et de son pays. Son leadership au sein de MICEVA est marqué par une volonté constante d'allier la prédication de la Parole à des actions concrètes sur le terrain. Il croit fermement que le développement d'Haïti passe par l'éducation et l'autonomisation des populations rurales.
            </p>
            <div className="founder-divider"></div>
            <p className="founder-quote">"Servir Dieu, c'est servir l'humanité là où le besoin est le plus grand."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apropos;
