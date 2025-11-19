import "./Hero.css";

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-text">I'm</span>{" "}
            <span className="highlight">Vadym Moiseienko</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Web Developer</h2>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Divam-dev" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://linkedin.com/in/vadym-moiseienko" target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://t.me/DivamYT" target="_blank">
              <i className="fab fa-telegram fa-2x"></i>
            </a>
            <a href="mailto:moiseenko.vadim228@gmail.com">
              <i className="fa fa-envelope fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
