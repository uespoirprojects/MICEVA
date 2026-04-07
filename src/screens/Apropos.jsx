import './Apropos.css';

const Apropos = () => {
  return (
    <div className="apropos-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="watermark">MICEVA</div>
        <div className="container">
          <h1 className="animate-fadeInUp">À propos de nous</h1>
          <p className="hero-subtitle animate-fadeInUp">
            Mission Chapelle Évangélique Vision en Action — Puits-Salé, Aquin, depuis 1978
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="history">
        <div className="container">
          <div className="history-card">
            <div className="history-content">
              <h2>Notre Histoire</h2>
              <p>
                La Mission Chapelle Évangélique Vision en Action (MICEVA) a été implantée à l'automne
                1978 dans la localité rurale de Puits-Salé, commune d'Aquin, dans le Sud d'Haïti. À
                cette époque, la zone était marquée par l'isolement, le manque d'infrastructures
                éducatives et l'absence d'encadrement spirituel structuré. C'est dans ce contexte que
                des serviteurs de Dieu ont discerné l'appel d'établir une œuvre évangélique centrée sur
                la proclamation du salut en Jésus-Christ et la formation de disciples.
              </p>
              <p>
                Dès ses débuts, MICEVA s'est définie non comme une mission parallèle, mais comme une
                œuvre génératrice d'ouvriers — un espace où des hommes et des femmes
                seraient formés, affermis et envoyés pour servir le Royaume. Sa présence à Puits-Salé
                répondait à une conviction fondamentale : glorifier Dieu et annoncer le message du salut
                par grâce, selon Psaume 86:12 et Actes 1:8.
              </p>
              <p>
                Depuis 1978, MICEVA a traversé des défis, des saisons de croissance et des transitions.
                Mais son appel demeure inchangé : former des serviteurs, édifier des familles, transformer
                des communautés et glorifier Dieu dans toutes ses œuvres.
              </p>
            </div>

            <div className="history-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">1978</span>
                  <p>Implantation de MICEVA à Puits-Salé, commune d'Aquin, Sud d'Haïti</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Développement</span>
                  <p>Ouverture de stations et d'écoles — enseignement biblique, formation de leaders locaux</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Engagement social</span>
                  <p>Accès à l'eau potable, reboisement, santé communautaire et actions d'entraide</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Aujourd'hui</span>
                  <p>Partenariat avec l'Université Espoir de Calvary Chapel — formation supérieure en Sciences Informatiques, Comptabilité et Gestion des affaires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container vision-mission-grid">
          <div className="vision-card">
            <h3>Notre Vision</h3>
            <p>
              Voir MICEVA se développer pour devenir une entité chrétienne nationale autonome,
              capable de contribuer à l'éducation, à l'édification spirituelle et au développement
              holistique de ses membres.
            </p>
            <p className="card-verse">
              " Que la parole de Christ habite parmi vous abondamment; instruisez-vous et exhortez-vous les uns les autres en toute sagesse, par des psaumes, par des hymnes, par des cantiques spirituels, chantant à Dieu dans vos coeurs sous l'inspiration de la grâce."
              <span>— Colossiens 3:16 —</span>
            </p>
          </div>
          {/* <div className="mission-card">
            <h3>Notre Mission</h3>
            <p>
              Glorifier Dieu et annoncer le message du salut par grâce à travers quatre axes essentiels :
              l'Adoration, l'Évangélisation, l'Éducation et le Service — touchant les cœurs et
              transformant les réalités sociales des communautés haïtiennes.
            </p>
            <p className="card-verse">
              "Mais vous recevrez une puissance, le Saint Esprit survenant sur vous, et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre."
              <span>— Actes 1:8</span>
            </p>
          </div> */}
        </div>
      </section>

      {/* Les 4 Axes */}
      <section className="axes">
        <div className="container">
          <div className="section-title">
            <p>Notre identité spirituelle</p>
            <h2>Les Quatre Axes de MICEVA</h2>
          </div>
          <div className="axes-grid">
            <div className="axe-item">
              <div className="axe-icon">🙏</div>
              <h4>Adoration</h4>
              <p>Cultiver une vie de louange centrée sur Dieu.</p>
            </div>
            <div className="axe-item">
              <div className="axe-icon">🕊️</div>
              <h4>Évangélisation</h4>
              <p>Proclamer l'Évangile et témoigner de la foi.</p>
            </div>
            <div className="axe-item">
              <div className="axe-icon">📚</div>
              <h4>Éducation</h4>
              <p>Former bibliquement, intellectuellement et moralement.</p>
            </div>
            <div className="axe-item">
              <div className="axe-icon">🤝</div>
              <h4>Service</h4>
              <p>Manifester l'amour du Christ par l'entraide sociale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs
      <section className="values">
        <div className="container">
          <div className="section-title">
            <p>Ce qui nous guide</p>
            <h2>Nos Valeurs Fondamentales</h2>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <h4>Foi</h4>
              <p>La base de toute notre action repose sur notre confiance inébranlable en Dieu et en sa Parole.</p>
            </div>
            <div className="value-item">
              <h4>Intégrité</h4>
              <p>Une conduite irréprochable comme témoignage — selon 1 Pierre 1:15 ; 2:12 ; 3:15–16.</p>
            </div>
            <div className="value-item">
              <h4>Compassion</h4>
              <p>L'amour du prochain est le moteur de notre engagement — soutenir les familles, les personnes âgées, les plus vulnérables.</p>
            </div>
            <div className="value-item">
              <h4>Service</h4>
              <p>Le leadership serviteur selon Matthieu 20:26 — se mettre au service des communautés est notre plus grande vocation.</p>
            </div>
            <div className="value-item">
              <h4>Maturité</h4>
              <p>Viser la croissance spirituelle, la maturité chrétienne et la multiplication de disciples ancrés dans la Parole.</p>
            </div>
            <div className="value-item">
              <h4>Communauté</h4>
              <p>Bâtir une communauté enracinée dans la Parole, unie dans l'amour fraternel et rayonnante dans son témoignage.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Engagement Social */}
      <section className="engagement">
        <div className="container">
          <div className="section-title">
            <p>Notre action sur le terrain</p>
            <h2>Engagement Social & Développement Communautaire</h2>
          </div>
          <p className="engagement-intro">
            Fidèle à sa vision holistique, MICEVA a développé un ministère social solide, orienté vers
            l'amélioration des conditions de vie des communautés vulnérables. L'Évangile transforme non
            seulement les cœurs, mais aussi les réalités sociales.
          </p>
          <div className="engagement-grid">
            <div className="engagement-item">
              <div className="engagement-icon">💧</div>
              <h4>Accès à l'eau potable</h4>
              <p>Installation de systèmes d'approvisionnement en eau dans des communautés dépourvues de sources sécurisées.</p>
            </div>
            <div className="engagement-item">
              <div className="engagement-icon">🌳</div>
              <h4>Reboisement & Environnement</h4>
              <p>Campagnes de plantation d'arbres, lutte contre l'érosion et sensibilisation écologique des communautés rurales.</p>
            </div>
            <div className="engagement-item">
              <div className="engagement-icon">🏥</div>
              <h4>Santé communautaire</h4>
              <p>Prévention, hygiène et formation d'agents de santé locaux pour les populations sans accès aux structures médicales.</p>
            </div>
            <div className="engagement-item">
              <div className="engagement-icon">🤲</div>
              <h4>Actions d'entraide</h4>
              <p>Soutien aux familles en difficulté, accompagnement des personnes âgées et interventions lors de crises.</p>
            </div>
            <div className="engagement-item">
              <div className="engagement-icon">🎓</div>
              <h4>Formation universitaire</h4>
              <p>Partenariat avec l'Université Espoir de Calvary Chapel — Sciences Informatiques, Comptabilité et Gestion des Affaires.</p>
            </div>
            <div className="engagement-item">
              <div className="engagement-icon">⛪</div>
              <h4>Stations & Écoles</h4>
              <p>Réseau d'écoles et de stations pour l'enseignement biblique, la formation de leaders et l'accompagnement des familles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Textes Bibliques Fondateurs */}
      <section className="bible-section">
        <div className="container">
          <div className="section-title light">
            <p>Notre fondement</p>
            <h2>Textes Bibliques Fondateurs</h2>
          </div>
          <div className="bible-grid">
            <div className="bible-card">
              <span className="bible-ref">Jean 3:16</span>
              <p>L'amour rédempteur de Dieu — le cœur de notre message.</p>
            </div>
            <div className="bible-card">
              <span className="bible-ref">Romains 10:14–15</span>
              <p>L'appel à envoyer des messagers — la raison de notre mission.</p>
            </div>
            <div className="bible-card">
              <span className="bible-ref">Matthieu 20:26</span>
              <p>Le leadership serviteur — le modèle de notre engagement.</p>
            </div>
            <div className="bible-card">
              <span className="bible-ref">Psaume 86:12</span>
              <p>Glorifier Dieu de tout cœur — le but premier de MICEVA.</p>
            </div>
            <div className="bible-card">
              <span className="bible-ref">Actes 1:8</span>
              <p>Être témoins jusqu'aux extrémités de la terre — notre appel missionnaire.</p>
            </div>
            <div className="bible-card">
              <span className="bible-ref">Colossiens 3:16</span>
              <p>La Parole de Christ habitant richement — notre vision pour la communauté.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Le Fondateur */}
      <section className="founder">
        <div className="container founder-container">
          <div className="founder-image">
            <div className="avatar-placeholder">EL</div>
            {/*<div className="avatar-ring"></div>*/}
          </div>
          <div className="founder-info">
            <p className="founder-tag">Fondateurs</p>
            <h3>Eris & Myriam Labady</h3>
            <p className="founder-bio">
              Homme et Femme de foi et visionnaire, le couple Eris & Myriam Labady ont répondu à l'appel de Dieu en
              implantant MICEVA à Puits-Salé en 1978. Leur leadership est marqué par une volonté
              constante d'allier la prédication de la Parole à des actions concrètes sur le terrain.
              Ils croient fermement que le développement spirituel et intellectuel sont complémentaires
              pour bâtir une société plus stable et prospère en Haïti.
            </p>
            <div className="founder-divider"></div>
            <p className="founder-quote">
              "MICEVA se veut un espace de croissance spirituelle, de maturité chrétienne et de
              multiplication de disciples — une œuvre génératrice d'ouvriers pour le Royaume."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apropos;