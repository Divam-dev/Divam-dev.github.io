import "./Projects.css";

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <img src="/project1.png" alt="Auris" />
            </div>

            <div className="project-content">
              <h3 className="project-title">Auris</h3>
              <p className="project-description">
                A powerful, feature-rich Discord music bot built with Discord.js,
                TypeScript, and Lavalink.
              </p>

              <a
                href="https://github.com/Divam-dev/Auris"
                target="_blank"
                className="project-btn"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <img src="/project2.png" alt="Codegram" />
            </div>

            <div className="project-content">
              <h3 className="project-title">Codegram</h3>
              <p className="project-description">
                An online learning platform where users can discover and publish
                their own IT courses.
              </p>

              <a
                href="https://github.com/Divam-dev/codegram"
                target="_blank"
                className="project-btn"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <img src="/project3.png" alt="UniSchedule" />
            </div>

            <div className="project-content">
              <h3 className="project-title">UniSchedule</h3>
              <p className="project-description">
                A web-based system for managing university schedules with course
                planning, professor assignments, and classroom allocation
                features.
              </p>

              <a
                href="https://github.com/Divam-dev/TS-All-Tasks/tree/feature/lb-3"
                target="_blank"
                className="project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
