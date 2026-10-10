import "./globals.css";

const D = {
  "slug": "spec-demo-casa-barista",
  "name": "Casa Barista & Co",
  "tagline": "Café de especialidad",
  "emoji": "☕",
  "accent": "#9a3412",
  "accent_dark": "#7c2d12",
  "accent_light": "#fed7aa",
  "vertical": "cafe",
  "address": "C. Víctor Garrido Puello 16, Plaza LMP, Santo Domingo (2da sede: C. Arzobispo Meriño 268, Zona Colonial)",
  "address_short": "C. Víctor Garrido Puello 16, Plaza LMP",
  "address_zone": "Santo Domingo · Zona Colonial",
  "phone_display": "(809) 692-4995",
  "phone_intl": "18096924995",
  "email": "info@casabaristacoffee.com",
  "hours_short": "Lun–Dom 7am–10pm",
  "hours_note": "Abierto todos los días",
  "hours_list": [
    [
      "Lunes – domingo",
      "7:00 a. m. – 10:00 p. m."
    ],
    [
      "2da sede Zona Colonial",
      "(829) 247-0142"
    ]
  ],
  "map_query": "Casa Barista, Víctor Garrido Puello 16, Santo Domingo",
  "hero_eyebrow": "Café de especialidad en Santo Domingo",
  "hero_h1a": "Café de verdad,",
  "hero_h1b": "hecho con pasión",
  "hero_lead": "Casa Barista & Co: café de especialidad con tostaduría propia, métodos artesanales y cocina 100% gluten free. Dos sedes: Plaza LMP y Zona Colonial.",
  "hero_cta_primary": "Ver el menú",
  "hero_card_title": "¿Antojo de buen café?",
  "hero_card_text": "Visítanos en Plaza LMP o en la Zona Colonial. Escríbenos por WhatsApp para pedidos y consultas.",
  "hero_card_cta": "Escríbenos",
  "services_kicker": "Nuestro menú",
  "services_h2": "Métodos y sabores",
  "services_sub": "Extracción perfecta, en cada taza.",
  "services": [
    {
      "icon": "☕",
      "title": "Espresso",
      "text": "La base de todo: intenso, cremoso y bien calibrado."
    },
    {
      "icon": "🥛",
      "title": "Flat white",
      "text": "Suave equilibrio entre espresso y leche vaporizada."
    },
    {
      "icon": "💧",
      "title": "V60",
      "text": "Filtrado artesanal que resalta las notas del grano."
    },
    {
      "icon": "⚗️",
      "title": "Aeropress",
      "text": "Método de inmersión para una taza limpia y dulce."
    },
    {
      "icon": "🌾",
      "title": "Cocina 100% gluten free",
      "text": "Acompaña tu café con opciones libres de gluten."
    },
    {
      "icon": "🫘",
      "title": "Tostaduría propia",
      "text": "Tostamos nuestros granos para máxima frescura."
    }
  ],
  "about_kicker": "Nosotros",
  "about_h2": "De la tostaduría a tu taza",
  "about_paras": [
    "Casa Barista & Co nació con una misión: servir café de especialidad de verdad en Santo Domingo, con tostaduría propia y baristas apasionados.",
    "Hoy contamos con dos sedes: C. Víctor Garrido Puello 16 en Plaza LMP y C. Arzobispo Meriño 268 en la Zona Colonial."
  ],
  "about_points": [
    {
      "bold": "Tostaduría propia",
      "text": "control total del grano, del tueste a la taza."
    },
    {
      "bold": "Dos sedes",
      "text": "Plaza LMP (809) 692-4995 y Zona Colonial (829) 247-0142."
    },
    {
      "bold": "Cocina gluten free",
      "text": "opciones para todos, sin gluten."
    }
  ],
  "about_img_alt": "Barista preparando café de especialidad",
  "extra_nav": "Sedes",
  "extra_kicker": "Dos ubicaciones",
  "extra_h2": "Elige tu sede favorita",
  "extra_text": "Plaza LMP: C. Víctor Garrido Puello 16 · Zona Colonial: C. Arzobispo Meriño 268. Ambas abiertas todos los días de 7:00 a. m. a 10:00 p. m.",
  "extra_icon": "📍",
  "extra_title": "Visítanos",
  "extra_card_text": "Escríbenos a info@casabaristacoffee.com o por WhatsApp para pedidos, eventos o consultas de catering.",
  "extra_cta": "Contactar",
  "location_arrive": "Sede principal: C. Víctor Garrido Puello 16, Plaza LMP, Santo Domingo. Abre el mapa para la ruta desde tu ubicación.",
  "contact_h2": "Visítanos hoy",
  "contact_sub": "Escríbenos por WhatsApp, llámanos o envíanos un correo.",
  "contact_wa_hint": "Pedidos y consultas",
  "images": {
    "hero": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "about": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "g1": "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    "g2": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
  }
};
const SERVICES = [{"icon": "☕", "title": "Espresso", "text": "La base de todo: intenso, cremoso y bien calibrado."}, {"icon": "🥛", "title": "Flat white", "text": "Suave equilibrio entre espresso y leche vaporizada."}, {"icon": "💧", "title": "V60", "text": "Filtrado artesanal que resalta las notas del grano."}, {"icon": "⚗️", "title": "Aeropress", "text": "Método de inmersión para una taza limpia y dulce."}, {"icon": "🌾", "title": "Cocina 100% gluten free", "text": "Acompaña tu café con opciones libres de gluten."}, {"icon": "🫘", "title": "Tostaduría propia", "text": "Tostamos nuestros granos para máxima frescura."}];
const HOURS_LIST = [["Lunes – domingo", "7:00 a. m. – 10:00 p. m."], ["2da sede Zona Colonial", "(829) 247-0142"]];
const ABOUT_PARAS = ["Casa Barista & Co nació con una misión: servir café de especialidad de verdad en Santo Domingo, con tostaduría propia y baristas apasionados.", "Hoy contamos con dos sedes: C. Víctor Garrido Puello 16 en Plaza LMP y C. Arzobispo Meriño 268 en la Zona Colonial."];
const ABOUT_POINTS = [{"bold": "Tostaduría propia", "text": "control total del grano, del tueste a la taza."}, {"bold": "Dos sedes", "text": "Plaza LMP (809) 692-4995 y Zona Colonial (829) 247-0142."}, {"bold": "Cocina gluten free", "text": "opciones para todos, sin gluten."}];
const IMGS = {"hero": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80", "about": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80", "g1": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1600&q=80", "g2": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80"};

const WHATSAPP = "https://wa.me/" + D.phone_intl;
const PHONE_TEL = "tel:+" + D.phone_intl;
const MAP_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(D.map_query) +
  "&output=embed";

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark">{D.emoji}</span>
            <span className="brand-name">
              {D.name}
              <small>{D.tagline}</small>
            </span>
          </a>
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#destacado">{D.extra_nav}</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
            <a
              className="btn btn-primary btn-sm"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              {D.hero_cta_primary}
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${IMGS.hero})` }}
        >
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">
                {D.emoji} {D.hero_eyebrow}
              </span>
              <h1>
                {D.hero_h1a} <span>{D.hero_h1b}</span>
              </h1>
              <p className="lead">{D.hero_lead}</p>
              <div className="hero-ctas">
                <a
                  className="btn btn-primary"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  📲 {D.hero_cta_primary}
                </a>
                <a className="btn btn-outline" href={PHONE_TEL}>
                  📞 {D.phone_display}
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>📍 {D.address_short}</strong>
                  {D.address_zone}
                </div>
                <div>
                  <strong>🕘 {D.hours_short}</strong>
                  {D.hours_note}
                </div>
              </div>
            </div>
            <div className="hero-card">
              <h2>{D.hero_card_title}</h2>
              <p>{D.hero_card_text}</p>
              <ul className="hours-list">
                {HOURS_LIST.map((h) => (
                  <li key={h[0]}>
                    <span>{h[0]}</span>
                    <span>{h[1]}</span>
                  </li>
                ))}
              </ul>
              <a
                className="btn btn-primary"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                {D.hero_card_cta}
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">{D.services_kicker}</span>
              <h2>{D.services_h2}</h2>
              <p>{D.services_sub}</p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <article key={s.title} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="section alt">
          <div className="container about-grid">
            <div className="about-copy">
              <span
                className="kicker"
                style={{
                  color: "var(--orange-500)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.78rem",
                }}
              >
                {D.about_kicker}
              </span>
              <h2>{D.about_h2}</h2>
              {ABOUT_PARAS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <ul className="about-points">
                {ABOUT_POINTS.map((pt) => (
                  <li key={pt.bold}>
                    <span className="tick">✓</span>
                    <span>
                      <strong>{pt.bold}:</strong> {pt.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-photo">
              <img src={IMGS.about} alt={D.about_img_alt} loading="lazy" />
              <div className="about-photo-strip">
                <img
                  src={IMGS.g1}
                  alt={D.name + " — galería"}
                  loading="lazy"
                />
                <img
                  src={IMGS.g2}
                  alt={D.name + " — galería"}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* DESTACADO */}
        <section id="destacado" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">{D.extra_kicker}</span>
              <h2>{D.extra_h2}</h2>
              <p>{D.extra_text}</p>
            </div>
            <div
              className="services-grid"
              style={{
                gridTemplateColumns: "1fr",
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              <article className="service-card" style={{ textAlign: "center" }}>
                <div
                  className="service-icon"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  {D.extra_icon}
                </div>
                <h3>{D.extra_title}</h3>
                <p style={{ marginBottom: "1.4rem" }}>{D.extra_card_text}</p>
                <a
                  className="btn btn-primary"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  📲 {D.extra_cta}
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Ubicación</span>
              <h2>Encuéntranos fácilmente</h2>
              <p>{D.address}</p>
            </div>
            <div className="location-grid">
              <div className="location-info">
                <div className="info-card">
                  <h3>📍 Dirección</h3>
                  <p>{D.address}</p>
                </div>
                <div className="info-card">
                  <h3>🕘 Horario</h3>
                  <p>{D.hours_short}</p>
                </div>
                <div className="info-card">
                  <h3>🚗 Cómo llegar</h3>
                  <p>{D.location_arrive}</p>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title={"Mapa — " + D.name}
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Contacto</span>
              <h2>{D.contact_h2}</h2>
              <p>{D.contact_sub}</p>
            </div>
            <div className="contact-grid">
              <a
                className="contact-card"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                <div className="label">WhatsApp</div>
                <div className="value">{D.phone_display}</div>
                <div className="hint">{D.contact_wa_hint} →</div>
              </a>
              <a className="contact-card" href={PHONE_TEL}>
                <div className="label">Teléfono</div>
                <div className="value">{D.phone_display}</div>
                <div className="hint">Llámanos →</div>
              </a>
              <a className="contact-card" href={`mailto:${D.email}`}>
                <div className="label">Correo</div>
                <div
                  className="value"
                  style={{ fontSize: "0.95rem", wordBreak: "break-all" }}
                >
                  {D.email}
                </div>
                <div className="hint">Escríbenos →</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <strong>{D.name}</strong>
              {D.address}
              <br />
              Tel. {D.phone_display}
            </div>
            <div>
              <strong>Horario</strong>
              {D.hours_short}
              <br />
              <a href={`mailto:${D.email}`} style={{ color: "inherit" }}>
                {D.email}
              </a>
            </div>
          </div>
          <p className="demo-note">
            Página de muestra — propuesta de diseño web preparada por Chachi.
            La información mostrada corresponde a los datos públicos del
            negocio y puede ajustarse a su oferta real.
          </p>
        </div>
      </footer>
    </>
  );
}
