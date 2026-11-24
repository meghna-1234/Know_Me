import { useState } from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const credentialsLink = 'https://drive.google.com/drive/folders/1bwRMptWvomZNGvxA5wrkNIZJQpj9dr0-?usp=drive_link';

const projects = [
  {
    number: '01',
    title: 'AI-Try_It',
    description: 'An AI-powered fashion app that lets you virtually try on outfits, discover styles, and get personalized wardrobe recommendations.',
    tags: ['AI', 'Fashion tech', 'Personalization'],
    url: 'https://github.com/meghna-1234/AI-Try_It',
  },
  {
    number: '02',
    title: 'Brick Breaker Game',
    description: 'A focused mini-project exploring game logic, user interaction, and clean problem-solving through Python.',
    tags: ['Python', 'Logic', 'Interactive'],
    url: 'https://github.com/meghna-1234/ultimate_BrickBreakerGame',
  },
  {
    number: '03',
    title: 'EnterpriseConnect',
    description: 'A workplace concept built around practical employee engagement, including an employee rating and feedback experience.',
    tags: ['Product design', 'Feedback', 'UX'],
    url: 'https://github.com/meghna-1234/EnterpriseConnect',
  },
];

const skillGroups = [
  { icon: Code2, label: 'Build', title: 'Programming & web', skills: ['Python', 'C++', 'HTML5', 'CSS3', 'JavaScript — learning', 'React — learning'] },
  { icon: BrainCircuit, label: 'Think', title: 'AI & machine learning', skills: ['AI agents', 'LLMs & prompt engineering', 'ML concepts', 'RAG — learning', 'Vector databases — learning'] },
  { icon: Cloud, label: 'Ship', title: 'Cloud & systems', skills: ['AWS', 'SQL', 'PostgreSQL', 'Data structures', 'OOP concepts', 'System design — learning'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Meghna Patel home">
          <span className="mark">MP</span>
          <span>Meghna Patel</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={credentialsLink} target="_blank" rel="noreferrer" onClick={closeMenu}>Credentials <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Computer science student · Bhopal, India</p>
            <h1>Building thoughtful<br /><em>technology</em> for people.</h1>
            <p className="hero-intro">I’m Meghna, a curious software developer in the making who enjoys turning complex ideas into simple, useful experiences — with a special interest in AI and cloud technology.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="mailto:patelmeghna699@gmail.com">Let’s connect <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><strong>02</strong> years of learning</span>
              <span><strong>08.10</strong> current CGPA</span>
              <span><strong>2028</strong> graduating</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Portrait area">
            <div className="portrait-card">
              <img className="portrait-image" src="/image.png" alt="Meghna Patel" />
              <div className="portrait-caption"><span>Meghna Patel</span><span>01 / 01</span></div>
            </div>
            <div className="circle-text">AI · CLOUD · CODE · AI · CLOUD · CODE ·</div>
          </div>
        </section>

        <section id="about" className="about section-pad">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="about-grid">
            <h2>A developer with<br /><em>a human lens.</em></h2>
            <div className="about-body">
              <p className="large-copy">I’m currently pursuing my Bachelor of Technology in Computer Science Engineering at RGPV University. I love learning how technology works — and even more, finding ways it can work better for people.</p>
              <p>My strongest foundation is in Python, problem solving, and AI concepts. I’m actively expanding into JavaScript, React, backend development, and cloud-native tools to become a well-rounded software developer.</p>
              <a className="underlined-link" href={credentialsLink} target="_blank" rel="noreferrer">View my resume & certificates <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section id="work" className="work section-pad">
          <div className="section-heading"><div className="section-label"><span>02</span><span>Selected work</span></div><p>Small projects, real curiosity.<br />Each one taught me something new.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-row" key={project.number} href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                <span className="project-number">{project.number}</span>
                <div className="project-title"><h3>{project.title}</h3><ArrowUpRight size={21} /></div>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="skills section-pad">
          <div className="section-label"><span>03</span><span>What I bring</span></div>
          <div className="skills-intro"><h2>Foundations today.<br /><em>Possibilities tomorrow.</em></h2><p>I’m intentional about building a broad foundation while going deep on the tools that excite me most.</p></div>
          <div className="skill-grid">
            {skillGroups.map(({ icon: Icon, label, title, skills }) => <article className="skill-card" key={title}><div className="skill-card-top"><Icon size={22} /><span>{label}</span></div><h3>{title}</h3><ul>{skills.map((skill) => <li key={skill}><Check size={14} />{skill}</li>)}</ul></article>)}
          </div>
        </section>

        <section className="experience section-pad">
          <div className="section-label"><span>04</span><span>Experience & education</span></div>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-date">MAY — DEC 2025</span><div><h3>Intern · Edigible</h3><p>Amazon Web Services</p><span>Gained practical knowledge of operating systems and AWS while contributing AI-based solutions to a real-world cloud project.</span></div></div>
            <div className="timeline-item"><span className="timeline-date">2024 — 2028</span><div><h3>B.Tech · Computer Science Engineering</h3><p>RGPV University · LNCTS Bhopal</p><span>Current CGPA: 8.10 / 10 · SGPA: 8.33 / 10</span></div></div>
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="contact-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Open to opportunities</p><h2>Let’s make something<br /><em>meaningful.</em></h2><p>Whether you’re looking for a curious intern, a thoughtful collaborator, or just want to say hello — my inbox is open.</p><a className="button button-light" href="mailto:patelmeghna699@gmail.com">Say hello <Mail size={16} /></a></div>
          <div className="contact-details"><a href="mailto:patelmeghna699@gmail.com"><Mail size={18} />patelmeghna699@gmail.com</a><a href="https://www.linkedin.com/in/meghna-patel-0471ba334" target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn <ArrowUpRight size={15} /></a><a href="https://github.com/meghna-1234" target="_blank" rel="noreferrer"><Github size={18} />GitHub <ArrowUpRight size={15} /></a><a href={credentialsLink} target="_blank" rel="noreferrer"><Download size={18} />Resume & certificates <ArrowUpRight size={15} /></a></div>
        </section>
      </main>
      <footer><span>© 2026 Meghna Patel</span><span>Designed with curiosity & care</span><a href="#top"><ChevronDown size={16} className="back-top" /> Back to top</a></footer>
    </div>
  );
}

export default App;
