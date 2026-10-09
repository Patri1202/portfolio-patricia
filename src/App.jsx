import { useState } from 'react';
import './App.css';

export default function App() {
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const techStack = {
    Frontend: ['JavaScript (ES6+)', 'React', 'HTML5 & CSS3', 'Bootstrap'],
    Backend: ['PHP', 'Java', 'Arquitectura MVC', 'REST APIs'],
    BasesDeDatos: ['MySQL', 'phpMyAdmin', 'Modelado Relacional'],
    Herramientas: ['Git & GitHub', 'VS Code', 'Apache / XAMPP']
  };

  const projects = [
    {
      title: 'Invitación de Boda Interactiva & Sistema de Confirmación',
      category: 'Proyecto Freelance',
      status: 'real',
      statusLabel: 'Proyecto Real',
      image: '/sello-lacre.png', // Sello de lacre con iniciales (puedes cambiarlo por otra imagen si lo deseas)
      description:
        'Aplicación web real a medida para la gestión de invitados y confirmaciones de asistencia a una boda. Permite respuestas personalizadas, registro de intolerancias alimentarias y transporte, con un panel de control privado para los organizadores.',
      highlights: [
        'Desarrollo del sistema completo de confirmación de asistencia en PHP y MySQL con registro de intolerancias alimentarias y autobús.',
        'Panel de administración privado con reportes consolidados en tiempo real y descarga de listados en PDF para los novios.',
        'Diseño responsivo móvil-first optimizado para pantallas móviles, con animaciones en CSS3 y JavaScript.'
      ],
      challenge: 'Garantizar la protección de datos de los invitados y manejar de forma segura las confirmaciones concurrentes de forma sencilla para el usuario final.',
      tags: ['PHP', 'MySQL', 'PDF Generation', 'Responsive Design'],
      githubLink: 'https://github.com/tu-usuario/invitacion-boda'
    },
    {
      title: 'Rutapeo — Progressive Web App',
      category: 'Proyecto Freelance',
      status: 'real',
      statusLabel: 'Proyecto Real',
      image: '/rutapeo.jpg',
      description:
        'Aplicación web progresiva (PWA) full-stack para la creación, exploración y planificación de rutas gastronómicas y de tapeo. Permite diseñar itinerarios personalizados, geolocalizar bares en mapas interactivos y compartir experiencias culinarias con una galería fotográfica integrada.',
      highlights: [
        'Arquitectura frontend SPA desarrollada con JavaScript modular y Bootstrap, conectada a una API REST backend en PHP.',
        'Diseño y modelado de base de datos relacional MySQL estructurada en más de 15 tablas para rutas, locales, paradas, favoritos y perfiles.',
        'Integración de mapas interactivos con Leaflet.js y sistema de geolocalización para el descubrimiento de locales y rutas cercanas.',
        'Implementación como Progressive Web App (PWA) con Service Workers para disponibilidad offline y sistema de autenticación multi-rol.'
      ],
      challenge: 'Garantizar la fluidez de interacción con mapas interactivos y geolocalización con múltiples marcadores concurrentes, optimizando la sincronización offline en dispositivos móviles.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Leaflet.js', 'Bootstrap', 'PWA', 'REST API']
    },
    {
      title: 'PlayGo — Proyecto Final DAW',
      category: 'Full Stack Web App',
      status: 'finalizado',
      statusLabel: 'Finalizado',
      image: '/playgo.png',
      description:
        'Plataforma interactiva de juegos educativos y de entretenimiento adaptada a múltiples edades. Cuenta con perfiles de acceso dinámicos, administración de contenidos, rankings en tiempo real y soporte técnico integrado.',
      highlights: [
        'Desarrollo de toda la lógica de backend en PHP orientado a objetos con control de sesiones, roles protegidos y persistencia en base de datos MySQL.',
        'Implementación de PWA (Progressive Web App) y sistema multiidioma dinámico (español/inglés) para la interfaz de usuario.',
        'Diseño del sistema de rankings y base de datos relacional optimizada con integridad referencial.'
      ],
      challenge: 'Garantizar una experiencia fluida e interactiva en la carga de juegos y traducción del contenido en tiempo real sin recargar la página.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'PWA'],
      githubLink: 'https://github.com/tu-usuario/playgo',
      demoLink: 'https://playgo.rf.gd/'
    },
    {
      title: 'Plataforma Inmobiliaria Full Stack',
      category: 'Web App & Panel de Gestión',
      status: 'finalizado',
      statusLabel: 'Finalizado',
      image: '/inmobiliaria.jpg',
      description:
        'Aplicación web integral bajo el patrón Modelo-Vista-Controlador (MVC). Cuenta con buscador público de inmuebles, fichas detalladas y un panel privado con permisos y control de acceso diferenciado por roles.',
      highlights: [
        'Arquitectura limpia bajo el patrón de diseño MVC en PHP puro, logrando una estricta separación de responsabilidades entre modelo, vista y controlador.',
        'Autenticación segura de usuarios y panel de administración para la gestión de inmuebles con subida y almacenamiento local de imágenes.',
        'Base de datos MySQL diseñada para evitar redundancia de información y controlar duplicados.'
      ],
      challenge: 'Implementar el sistema de control de acceso por roles (administrador, vendedor, comprador) y restringir el acceso a las rutas privadas de forma segura.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'CSS3', 'MVC', 'Apache'],
      githubLink: 'https://github.com/tu-usuario/inmobiliaria-php'
    },
    {
      title: 'FitLife Center — Sistema de Gestión (Python)',
      category: 'Backend / Programación Python',
      status: 'finalizado',
      statusLabel: 'Finalizado',
      image: '/fitlife.jpg',
      description:
        'Aplicación de consola en Python desarrollada para la simulación y gestión de reservas en un centro deportivo, aplicando conceptos avanzados del paradigma de Programación Orientada a Objetos (POO).',
      highlights: [
        'Implementación de Abstracción, Herencia y Polimorfismo mediante clases base abstractas (abc.ABC) y cálculo dinámico de tarifas.',
        'Robustez técnica con gestión de excepciones personalizadas (SinPlazasError) para controlar la capacidad máxima de reservas en tiempo real.',
        'Asociación bidireccional y actualización dinámica del estado de la actividad y la ficha del cliente en memoria.'
      ],
      challenge: 'Modelar una lógica relacional robusta en memoria y controlar condiciones de carrera simuladas al gestionar cupos concurrentes.',
      tags: ['Python', 'POO', 'Excepciones', 'Clean Code'],
      githubLink: 'https://github.com/tu-usuario/fitlife-python'
    },
    {
      title: 'Sistema de Gestión & Reservas',
      category: 'Backend & Lógica de Negocio',
      status: 'finalizado',
      statusLabel: 'Finalizado',
      image: '/reservas.jpg',
      description:
        'Aplicación de escritorio orientada a objetos para la gestión transaccional de recursos, reservas y usuarios, con control de excepciones e integridad de datos.',
      highlights: [
        'Desarrollo de la lógica de negocio robusta en Java implementando conceptos avanzados de Programación Orientada a Objetos (POO).',
        'Conexión con base de datos SQL para operaciones CRUD completas y control estricto de excepciones transaccionales.',
        'Modelado relacional robusto con llaves foráneas y disparadores para asegurar la coherencia de datos.'
      ],
      challenge: 'Garantizar la consistencia transaccional y la prevención de sobre-reservas concurrentes en la base de datos relacional.',
      tags: ['Java', 'SQL', 'Git', 'POO'],
      githubLink: 'https://github.com/tu-usuario/gestion-reservas'
    }
  ];


  return (
    <div className="site-wrapper">
      {/* HEADER */}
      <header className="site-header">
        <div className="header-container">
          <div className="brand-container">
            <a href="#hero" className="brand-logo">
              Patricia Jiménez<span className="brand-dot">.</span>
            </a>
            <span className="brand-subtitle">Full Stack Developer</span>
          </div>
          <nav className="nav-menu">
            <a href="#proyectos">Proyectos</a>
            <a href="#stack">Stack</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#contacto" className="nav-contact-btn">Contacto</a>
            <div className="header-social-links">
              <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="social-header-btn" title="Visitar mi GitHub">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer" className="social-header-btn" title="Seguir en LinkedIn">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero-section">
          <div className="status-badge">
            <span className="status-dot"></span>
            Disponibilidad completa para nuevas oportunidades · #OpenToWork
          </div>
          <h1 className="hero-title">
            Transformo ideas en soluciones web funcionales.
          </h1>
          <p className="hero-description">
            Graduada en <strong>Desarrollo de Aplicaciones Web (DAW)</strong> y <strong>Maestra de Educación Infantil y Primaria</strong>. Combino mi formación técnica en desarrollo Full Stack (PHP, Java, JavaScript, MySQL) con las habilidades clave de mi experiencia docente: comunicación efectiva, empatía, organización meticulosa y resolución ágil de problemas.
          </p>
          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">Ver proyectos destacados</a>
            <a href="/cv-patricia-jimenez.pdf" download className="btn btn-secondary">Descargar CV</a>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="content-section">
          <div className="section-header">
            <span className="section-label">01 / TRABAJO SELECCIONADO</span>
            <h2 className="section-title">Proyectos destacados</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                <div className="project-cover-container">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-cover-image" />
                  ) : (
                    <div className="project-cover-gradient"></div>
                  )}
                  <div className="project-cover-overlay"></div>
                  <div className="project-cover-header">
                    <span className="project-category">{project.category}</span>
                    <span className={`project-status ${project.status}`}>{project.statusLabel}</span>
                  </div>
                  <div className="project-cover-footer">
                    <h3 className="project-title-cover">{project.title}</h3>
                    <span className="project-tech-summary">{project.tags.slice(0, 3).join(' • ')}</span>
                  </div>
                </div>

                <div className="project-content-body">
                  <div>
                    <p className="project-desc">{project.description}</p>

                    <button
                      onClick={() => setActiveProjectModal(index)}
                      className="project-toggle-btn"
                    >
                      Ver detalles ▼
                    </button>
                  </div>

                  <div className="project-bottom">
                    <div className="tech-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="link-arrow">
                          GitHub <span>↗</span>
                        </a>
                      )}
                      {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noreferrer" className="link-arrow">
                          Demo <span>↗</span>
                        </a>
                      )}
                      {!project.githubLink && !project.demoLink && (
                        <span className="project-private-badge">
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="13" width="13" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          Código privado
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="content-section">
          <div className="section-header">
            <span className="section-label">02 / COMPETENCIAS TÉCNICAS</span>
            <h2 className="section-title">Tecnologías & Herramientas</h2>
          </div>

          <div className="stack-grid">
            {Object.entries(techStack).map(([category, items], idx) => (
              <div key={idx} className="stack-card">
                <h4 className="stack-category">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                <ul className="stack-list">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="content-section">
          <div className="section-header">
            <span className="section-label">03 / TRAYECTORIA</span>
            <h2 className="section-title">Perfil & Experiencia</h2>
          </div>

          <div className="about-layout">
            <div className="about-photo-wrapper">
              <img src="/Patri-perfil.jpg" alt="Patricia Jiménez" className="about-photo" />
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Mi transición de <strong>Maestra de Educación Infantil y Primaria</strong> al desarrollo de software nace de mi pasión por la resolución de problemas y la estructuración de ideas. Aporto al desarrollo de aplicaciones la empatía, la paciencia y la comunicación clara necesarias para entender las necesidades del usuario y colaborar eficazmente en equipos multidisciplinares.
                </p>
                <p>
                  Concibo la programación de la misma forma que la enseñanza: como un proceso estructurado, metódico y orientado a facilitar la vida de las personas. Mi objetivo es aportar código limpio, buenas prácticas y una actitud de aprendizaje continuo en cada proyecto.
                </p>
              </div>
              <div className="about-highlights">
                <div className="highlight-item">
                  <h5>Formación</h5>
                  <p>Técnico Superior DAW + Grados en Educación Primaria e Infantil.</p>
                </div>
                <div className="highlight-item">
                  <h5>Metodología</h5>
                  <p>Buenas prácticas, control de versiones con Git y documentación concisa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="content-section contact-section">
          <div className="section-header">
            <span className="section-label">04 / CONECTAR</span>
            <h2 className="section-title">Contacto</h2>
          </div>

          <div className="contact-card">
            <div className="contact-header">
              <span className="contact-direct-label">Contacto directo</span>
              <h3 className="contact-direct-title">¿Hablamos sobre una oportunidad o un proyecto?</h3>
              <p className="contact-direct-desc">
                Estoy abierta a nuevas oportunidades como <strong>Full Stack Developer Junior</strong> y a proyectos en los que pueda aportar mi experiencia técnica, responsabilidad, proactividad y orientación a soluciones.
              </p>
            </div>

            <div className="contact-methods-grid">
              <a href="mailto:p.jimenezbe@gmail.com" className="contact-method-card">
                <div className="contact-method-icon">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="contact-method-info">
                  <span className="contact-method-label">Correo electrónico</span>
                  <strong className="contact-method-value">p.jimenezbe@gmail.com</strong>
                </div>
                <span className="contact-method-action">Enviar correo ↗</span>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-method-card">
                <div className="contact-method-icon">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                  </svg>
                </div>
                <div className="contact-method-info">
                  <span className="contact-method-label">LinkedIn</span>
                  <strong className="contact-method-value">Conectar en LinkedIn</strong>
                </div>
                <span className="contact-method-action">Ver perfil ↗</span>
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-method-card">
                <div className="contact-method-icon">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </div>
                <div className="contact-method-info">
                  <span className="contact-method-label">GitHub</span>
                  <strong className="contact-method-value">Explorar proyectos</strong>
                </div>
                <span className="contact-method-action">Ver repositorios ↗</span>
              </a>
            </div>


          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>© 2026 Patricia Jiménez. Construido con React & CSS.</p>
      </footer>

      {/* MODAL DE DETALLES DEL PROYECTO */}
      {activeProjectModal !== null && (
        <div className="project-modal-overlay" onClick={() => setActiveProjectModal(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="project-modal-close-btn"
              onClick={() => setActiveProjectModal(null)}
              aria-label="Cerrar ventana de detalles"
            >
              &times;
            </button>
            <div className="project-modal-body">
              <span className="project-modal-category">{projects[activeProjectModal].category}</span>
              <h3 className="project-modal-title">{projects[activeProjectModal].title}</h3>

              <div className="project-modal-divider"></div>

              <h4 className="project-modal-section-title">Aportación clave:</h4>
              <ul className="project-modal-highlights">
                {projects[activeProjectModal].highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>

              {projects[activeProjectModal].challenge && (
                <div className="project-modal-challenge-section">
                  <h4 className="project-modal-section-title">Reto superado:</h4>
                  <div className="project-modal-challenge">
                    {projects[activeProjectModal].challenge}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}