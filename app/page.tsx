import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Code2, Layers3, Search, Compass, Handshake,
  Globe2, ShieldCheck, Headphones, Gem, Rocket, Menu, X
} from "lucide-react";

const services = [
  { title: "AVENOR Web", description: "Website design, development, e-commerce and web applications.", icon: Code2 },
  { title: "AVENOR Technologies", description: "Custom software, web applications and enterprise systems.", icon: Layers3 },
  { title: "AVENOR Growth", description: "SEO, digital marketing and search visibility.", icon: Search },
  { title: "AVENOR Consulting", description: "Technology consulting and digital strategy.", icon: Compass },
  { title: "AVENOR Partnerships", description: "Long-term development, maintenance and technology support.", icon: Handshake },
];

const projects = [
  {
    name: "Roiv Freight Coordination",
    type: "Client website · Web design & SEO",
    image: "https://images.unsplash.com/photo- truck-placeholder",
    description: "A digital presence for a freight coordination business.",
    href: "https://www.roivfc.com/",
    label: "Visit project",
    className: "project-roiv",
  },
  {
    name: "Hostel Hub",
    type: "Product project · Web platform",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
    description: "A platform concept for discovering student accommodation.",
    href: "#contact",
    label: "Discuss a project",
    className: "project-hostel",
  },
  {
    name: "StudyPal",
    type: "Academic project · Learning platform",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    description: "A student-focused concept for finding study partners and resources.",
    href: "#contact",
    label: "Discuss a project",
    className: "project-studypal",
  },
];

const process = [
  ["01", "Discover", "Understand your goals, audience and challenges."],
  ["02", "Plan", "Shape a clear scope, priorities and practical direction."],
  ["03", "Build", "Design, develop and test with attention to detail."],
  ["04", "Support", "Launch confidently and keep improving."],
];

const locations = ["Lagos", "Ibadan", "Ogun State", "Abuja", "Osogbo"];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={`brand ${compact ? "brand-compact" : ""}`} aria-label="AVENOR Digital home">
      <span className="brand-symbol" aria-hidden="true"><span>A</span><i /></span>
      <span className="brand-type"><strong>AVENOR</strong><small>DIGITAL</small></span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#work">Projects</Link>
            <Link href="#locations">Locations</Link>
          </nav>
          <Link href="#contact" className="button button-gold header-cta">Get a quote <ArrowUpRight size={15} /></Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><Menu size={23} /></summary>
            <nav aria-label="Mobile navigation">
              <Link href="#about">About</Link><Link href="#services">Services</Link>
              <Link href="#work">Projects</Link><Link href="#locations">Locations</Link>
              <Link href="#contact">Contact</Link>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero">
        <div className="hero-image" role="img" aria-label="Laptop on a premium dark workspace" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Premium digital solutions</p>
            <h1>Technology That<br />Moves Business<br /><em>Forward.</em></h1>
            <p className="hero-description">We design, develop and optimise digital solutions that help businesses grow, compete and thrive.</p>
            <div className="hero-actions">
              <Link href="#contact" className="button button-gold">Work with us <ArrowRight size={17} /></Link>
              <Link href="#services" className="button button-outline">Explore our services</Link>
            </div>
          </div>
          <div className="hero-scroll"><span className="scroll-icon">↓</span> Scroll to explore</div>
        </div>
        <div className="hero-orbit" />
      </section>

      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-heading services-heading">
            <div><p className="eyebrow"><span /> Our services</p><h2>Complete Digital Solutions<br />Under One Roof</h2></div>
            <div className="heading-aside"><p>From stunning websites to powerful software and strategic SEO, we deliver solutions that drive real results.</p><Link href="#contact" className="text-link">Discuss your needs <ArrowRight size={15} /></Link></div>
          </div>
          <div className="service-grid">
            {services.map(({ title, description, icon: Icon }) => (
              <article className="service-card" key={title}>
                <Icon size={31} strokeWidth={1.8} />
                <h3>{title}</h3><p>{description}</p>
                <Link href="#contact">Learn more <ArrowRight size={14} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-photo" role="img" aria-label="Modern professional office interior" />
        <div className="about-copy">
          <p className="eyebrow"><span /> About us</p>
          <h2>Building Digital Excellence<br />for a Smarter Tomorrow.</h2>
          <p>AVENOR Digital is a digital solutions and technology agency helping businesses of all sizes build a stronger online presence, streamline operations and pursue sustainable growth through technology.</p>
          <Link href="#contact" className="button button-gold">Learn more about us <ArrowRight size={15} /></Link>
        </div>
        <div className="values-grid">
          <div><Rocket /><span>Innovative<br />solutions</span></div>
          <div><ShieldCheck /><span>Reliable &<br />secure</span></div>
          <div><Headphones /><span>Client-focused<br />support</span></div>
          <div><Gem /><span>Quality in<br />every detail</span></div>
        </div>
      </section>

      <section id="work" className="section projects-section">
        <div className="container">
          <div className="projects-layout">
            <div className="projects-intro"><p className="eyebrow"><span /> Selected projects</p><h2>Turning Ideas Into<br />Impactful Solutions</h2><p>Explore selected work and product concepts that reflect our approach to digital problem-solving.</p><Link href="#contact" className="button button-outline">Start a project <ArrowRight size={15} /></Link></div>
            <div className="project-grid">
              <article className="project-card project-roiv">
                <div className="project-image" role="img" aria-label="Freight truck on the road" />
                <div className="project-caption"><div><h3>Roiv Freight Coordination</h3><p>Client website · Web design & SEO</p></div><a href="https://www.roivfc.com/" target="_blank" rel="noreferrer" aria-label="Visit Roiv Freight Coordination"><ArrowUpRight /></a></div>
              </article>
              <article className="project-card project-hostel">
                <div className="project-image" role="img" aria-label="Student accommodation building" />
                <div className="project-caption"><div><h3>Hostel Hub</h3><p>Product project · Web platform</p></div><span aria-hidden="true"><ArrowUpRight /></span></div>
              </article>
              <article className="project-card project-studypal">
                <div className="project-image" role="img" aria-label="Digital learning on a laptop" />
                <div className="project-caption"><div><h3>StudyPal</h3><p>Academic project · Learning platform</p></div><span aria-hidden="true"><ArrowUpRight /></span></div>
              </article>
            </div>
          </div>
          <div className="stats-strip">
            <div><strong>05</strong><span>Integrated service divisions</span></div>
            <div><strong>03</strong><span>Featured projects & concepts</span></div>
            <div><strong>04</strong><span>Steps in our delivery process</span></div>
            <div><Globe2 /><span>Nigeria<br />& beyond</span></div>
          </div>
        </div>
      </section>

      <section className="section promise-section">
        <div className="container promise-layout">
          <div className="promise-intro"><p className="eyebrow"><span /> The AVENOR standard</p><h2>Good work. Clear communication. <em>Lasting value.</em></h2><p>We believe strong technology partnerships are built through consistency, transparency and care at every stage.</p></div>
          <div className="promise-cards">
            <article><b>“</b><h3>Clarity from the start</h3><p>Thoughtful discovery, clear priorities and a shared understanding of what success means.</p><span>01 / COMMUNICATION</span></article>
            <article><b>“</b><h3>Care in every detail</h3><p>Purposeful design, dependable engineering and careful testing before delivery.</p><span>02 / CRAFT</span></article>
            <article><b>“</b><h3>Partnership beyond launch</h3><p>Practical support and a focus on helping your digital solutions keep moving forward.</p><span>03 / PARTNERSHIP</span></article>
          </div>
        </div>
      </section>

      <section id="locations" className="locations-section">
        <div className="container locations-inner">
          <div><p className="eyebrow"><span /> Where we work</p><h2>Rooted in Nigeria. <em>Open to the world.</em></h2><p>We work with businesses in Nigeria and beyond through flexible digital services and remote collaboration.</p></div>
          <ul>{locations.map((location) => <li key={location}>{location}</li>)}</ul>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="container cta-inner">
          <div><p className="eyebrow">Your next chapter starts here</p><h2>Let's Build Something<br /><em>Great Together.</em></h2><p>Partner with AVENOR Digital for your next project or technology partnership.</p></div>
          <Link href="mailto:hello@avenordigital.com" className="button button-dark">Get in touch <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main"><BrandMark /><nav aria-label="Footer navigation"><Link href="#about">About</Link><Link href="#services">Services</Link><Link href="#work">Projects</Link><Link href="#locations">Locations</Link><Link href="#contact">Contact</Link></nav><a href="mailto:hello@avenordigital.com" className="footer-contact">Let's talk <ArrowUpRight size={14} /></a></div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} AVENOR Digital. All rights reserved.</span><span>Technology That Moves Business Forward.</span></div>
        </div>
      </footer>
    </main>
  );
}
