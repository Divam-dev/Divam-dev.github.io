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
              <img src="/project1.png" alt="Project One" />
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

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <img src="/project2.png" alt="Project Two" />
            </div>

            <div className="project-content">
              <h3 className="project-title">AYNT</h3>
              <p className="project-description">
                A Telegram bot that enables users to download videos from
                multiple social media platforms with simple URL sharing.
              </p>

              <a
                href="https://github.com/Divam-dev/aynt"
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
              <img src="/project3.png" alt="Project Three" />
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
