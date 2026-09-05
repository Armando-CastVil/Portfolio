```tsx
export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="logo">
            Armando
          </a>

          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>

            <h1>Armando Castaneda Villalobos</h1>

            <h2>Computer Science Graduate</h2>

            <p className="hero-description">
              I&apos;m a Computer Science graduate with experience in
              technology, data analysis, research, and customer service.
              I enjoy solving problems, working with data, and building
              practical solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>

              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>

            <p className="section-subtitle">
              A little about my background and what I&apos;m interested in.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m a Computer Science graduate interested in the
                intersection of technology, data, and business.
              </p>

              <p>
                My experience includes machine learning research, quantitative
                data analysis, customer service, documentation, and
                troubleshooting technical equipment.
              </p>

              <p>
                I&apos;m particularly interested in opportunities where I can
                use analytical and problem-solving skills to make informed
                decisions and solve real-world problems.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight">
                <h3>Education</h3>
                <p>Computer Science</p>
              </div>

              <div className="highlight">
                <h3>Focus</h3>
                <p>Data, Technology &amp; Problem Solving</p>
              </div>

              <div className="highlight">
                <h3>Location</h3>
                <p>San Diego, California</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>

            <p className="section-subtitle">
              My professional and research experience.
            </p>
          </div>

          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">
                    Reception Technician
                  </h3>

                  <p className="experience-company">
                    CSL Plasma
                  </p>
                </div>

                <span className="experience-date">
                  2024 – Present
                </span>
              </div>

              <div className="experience-description">
                <ul>
                  <li>
                    Assist customers and donors while providing accurate and
                    professional service.
                  </li>

                  <li>
                    Verify information, maintain accurate electronic records,
                    and follow established procedures.
                  </li>

                  <li>
                    Handle sensitive situations and communicate effectively
                    with individuals from diverse backgrounds.
                  </li>

                  <li>
                    Train and support new employees with front-desk
                    operations and registration procedures.
                  </li>
                </ul>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">
                    Research Assistant I
                  </h3>

                  <p className="experience-company">
                    SDSU Research Foundation
                  </p>
                </div>

                <span className="experience-date">
                  2023 – 2024
                </span>
              </div>

              <div className="experience-description">
                <ul>
                  <li>
                    Evaluated the performance of large language models and
                    analyzed experimental results.
                  </li>

                  <li>
                    Conducted quantitative data analysis and created
                    visualizations to communicate findings.
                  </li>

                  <li>
                    Performed literature reviews to support machine learning
                    research.
                  </li>

                  <li>
                    Documented research findings and collaborated on
                    experimental projects.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills</h2>

            <p className="section-subtitle">
              Technologies and skills I&apos;ve developed through education,
              research, and professional experience.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming</h3>

              <ul className="skill-list">
                <li className="skill">Python</li>
                <li className="skill">TypeScript</li>
                <li className="skill">JavaScript</li>
                <li className="skill">React</li>
                <li className="skill">Next.js</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Data</h3>

              <ul className="skill-list">
                <li className="skill">SQL</li>
                <li className="skill">Excel</li>
                <li className="skill">Data Analysis</li>
                <li className="skill">Data Visualization</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Professional</h3>

              <ul className="skill-list">
                <li className="skill">Problem Solving</li>
                <li className="skill">Customer Service</li>
                <li className="skill">Documentation</li>
                <li className="skill">Research</li>
                <li className="skill">Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>

            <p className="section-subtitle">
              A selection of projects that demonstrate my technical and
              problem-solving skills.
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <h3>Personal Portfolio</h3>

              <p>
                A responsive personal portfolio website built with Next.js,
                React, and TypeScript to showcase my experience, skills, and
                projects.
              </p>

              <div className="project-tags">
                <span className="project-tag">Next.js</span>
                <span className="project-tag">React</span>
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">CSS</span>
              </div>

              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  Live Site
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>Data Analysis Project</h3>

              <p>
                A data analysis project using Python and SQL to explore a
                dataset, identify trends, and communicate insights through
                visualizations.
              </p>

              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">SQL</span>
                <span className="project-tag">Data Analysis</span>
              </div>

              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="resume-section">
        <div className="container">
          <div className="resume-content">
            <h2 className="section-title">My Resume</h2>

            <p>
              Interested in learning more about my education, experience, and
              skills? Take a look at my full resume.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
          </div>

          <div className="contact-content">
            <p>
              I&apos;m always open to discussing career opportunities,
              projects, or connecting with other professionals.
            </p>

            <div className="contact-links">
              <a
                href="mailto:your.email@example.com"
                className="contact-link"
              >
                Email
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <p>© {new Date().getFullYear()} Armando Castaneda Villalobos</p>

          <p>Built with Next.js, React &amp; TypeScript</p>
        </div>
      </footer>
    </main>
  );
}
```
