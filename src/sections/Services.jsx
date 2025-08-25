import "../styles/services.css";

function Services() {
  const items = [
    {
      id: 1,
      title: "Game & Interações Web",
      desc:
        "Crio experiências interativas inspiradas em games: animações, microinterações e elementos dinâmicos que tornam a navegação envolvente.",
      // svg minimalista roxo
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
          <path d="M7 10h4M7 14h2M15.5 11.5v0M18 14v0" stroke="#8b80ff" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M6 6h12a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z" stroke="#8b80ff" strokeWidth="1.6" />
          <circle cx="15.5" cy="11.5" r="1.1" fill="#8b80ff"/>
          <circle cx="18" cy="14" r="1.1" fill="#8b80ff"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Desenvolvimento",
      desc:
        "Desenvolvo front-end de sites profissionais, blogs, landing pages e aplicações web com foco em performance e acessibilidade.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
          <path d="M3 5h18v14H3z" stroke="#8b80ff" strokeWidth="1.6"/>
          <path d="M3 9h18" stroke="#8b80ff" strokeWidth="1.6"/>
          <circle cx="6" cy="7" r="1" fill="#8b80ff"/>
          <circle cx="9" cy="7" r="1" fill="#8b80ff"/>
          <circle cx="12" cy="7" r="1" fill="#8b80ff"/>
          <path d="M9 13l-2 2 2 2M15 17l2-2-2-2" stroke="#8b80ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Motion",
      desc:
        "Animações e transições suaves que guiam o usuário, destacam ações e aumentam a percepção de qualidade do produto.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="4" width="10" height="16" rx="2" stroke="#8b80ff" strokeWidth="1.6"/>
          <rect x="15" y="8" width="4" height="3" rx="1" fill="#8b80ff" opacity=".9"/>
          <rect x="15" y="13" width="3" height="2" rx=".8" fill="#8b80ff" opacity=".6"/>
          <circle cx="10" cy="17" r="1" fill="#8b80ff"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="services">
      <h2 className="services-title">Serviços<span className="dot">.</span></h2>
      <div className="services-grid">
        {items.map(item => (
          <article key={item.id} className="service-card">
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;