import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I am a Full Stack Web Developer who enjoys building websites and
          applications that people genuinely enjoy using. I focus on turning
          ideas into real, functional projects and finding simple solutions to
          complex problems. I’m always learning new technologies, exploring
          different approaches, and trying out new ideas to improve my skills.
        </p>
        <h2 className="tech-stack-title">Tech Stack</h2>
        <div className="tech-stack-grid">
          <div className="tech-stack-card">
            <i className="fa-brands fa-square-js fa-2x" />
            <span>JavaScript</span>
          </div>
          <div className="tech-stack-card">
            <img src="src/assets/typescript-icon.svg" className="tech-icon" />
            <span>TypeScript</span>
          </div>
          <div className="tech-stack-card">
            <i className="fa-brands fa-node-js fa-2x" />
            <span>Node.js</span>
          </div>
          <div className="tech-stack-card">
            <i className="fa-brands fa-react fa-2x" />
            <span>React</span>
          </div>
          <div className="tech-stack-card">
            <i class="fa-brands fa-vuejs fa-2x"></i>
            <span>Vue.js</span>
          </div>

          <div className="tech-stack-card">
            <i className="fa-brands fa-html5 fa-2x" />
            <span>HTML/CSS</span>
          </div>
          <div className="tech-stack-card">
            <img src="src/assets/tailwind-icon.svg" className="tech-icon" />
            <span>Tailwind CSS</span>
          </div>
          <div className="tech-stack-card">
            <img src="src/assets/csharp-icon.svg" className="tech-icon" />
            <span>C#</span>
          </div>
          <div className="tech-stack-card">
            <i class="fa-brands fa-python fa-2x"></i>
            <span>Python</span>
          </div>
          <div className="tech-stack-card">
            <i class="fa-solid fa-database fa-2x"></i>
            <span>SQL</span>
          </div>
          <div className="tech-stack-card">
            <img src="src/assets/mongodb-icon.svg" className="tech-icon" />
            <span>MongoDB</span>
          </div>
          <div className="tech-stack-card">
            <i className="fa-brands fa-git-alt fa-2x" />
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};
