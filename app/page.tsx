
import Image from "next/image";
import ProfilePicture from "../Assets/pictures/ProfilePicture.jpg";
export default function Home() {

  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            AC
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="theme-button" aria-label="Toggle dark mode">
            ☾
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <p className="eyebrow">Hello, I&apos;m</p>

            <h1>
              Armando Castaneda
              <br />
              Villalobos
            </h1>

            <h2>Computer Science Graduate</h2>

            <p className="hero-description">
              I&apos;m a Computer Science graduate with experience in data
              analysis, research, customer service, and problem solving.
              I&apos;m passionate about using technology and data to build
              practical solutions and make an impact.
            </p>

            <div className="hero-buttons">
              <a href="/resume.pdf" className="button button-primary">
                <span>↓</span>
                View My Resume
              </a>

              <a href="#contact" className="button button-outline">
                <span>✉</span>
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-circle hero-circle-one"></div>
            <div className="hero-circle hero-circle-two"></div>

            <Image
              src={ProfilePicture}
              alt="Armando Castaneda Villalobos"
              className="hero-image"
              priority
            />

            <div className="dot-pattern"></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <SectionHeading
                title="About Me"
                subtitle="A little about my background and what I enjoy doing."
              />

              <p>
                I&apos;m a Computer Science graduate from San Diego State
                University with a strong interest in data, technology, and
                problem solving.
              </p>

              <p>
                My experience includes research with machine learning models,
                quantitative data analysis, customer service, and working in
                fast-paced environments. I enjoy learning new skills, taking
                on challenges, and finding efficient solutions to real-world
                problems.
              </p>

              <div className="about-details">
                <div className="about-detail">
                  <span className="detail-icon">⌖</span>
                  <span>San Diego, CA</span>
                </div>

                <div className="about-detail">
                  <span className="detail-icon">🎓</span>
                  <span>B.S. Computer Science</span>
                </div>

                <div className="about-detail">
                  <span className="detail-icon">◎</span>
                  <span>Open to Opportunities</span>
                </div>
              </div>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">💡</div>
                <div>
                  <h3>Analytical Thinker</h3>
                  <p>
                    I enjoy working with data and finding meaningful insights.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">♧</div>
                <div>
                  <h3>People Focused</h3>
                  <p>
                    I have experience communicating with different groups and
                    handling sensitive situations.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">&lt;/&gt;</div>
                <div>
                  <h3>Continuous Learner</h3>
                  <p>
                    Always looking to grow my skills and take on new
                    challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading
              title="Experience"
              subtitle="My professional and research experience."
            />

            <a href="/resume.pdf" className="text-link">
              View Full Resume →
            </a>
          </div>

          <div className="experience-list">
            <Experience
              icon="CSL"
              title="Reception Technician"
              company="CSL Plasma"
              date="Jun 2024 – Present"
              location="San Diego, CA"
              bullets={[
                "Greeted and assisted donors while providing professional and customer-focused service.",
                "Verified donor information and maintained accurate electronic records.",
                "Handled sensitive situations and communicated effectively with donors and medical staff.",
                "Trained and supported new employees with front-desk operations.",
              ]}
            />

            <Experience
              icon="▥"
              title="Research Assistant I"
              company="SDSU Research Foundation"
              date="2023 – 2024"
              location="San Diego, CA"
              bullets={[
                "Evaluated the performance of large language models and analyzed experimental results.",
                "Conducted quantitative data analysis and created visualizations.",
                "Performed literature reviews to support machine learning research.",
                "Documented research findings and collaborated on experimental projects.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container">
          <SectionHeading
            title="Skills"
            subtitle="Technologies and skills I've developed through education, research, and professional experience."
          />

          <div className="skills">
            <span>Python</span>
            <span>SQL</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Excel</span>
            <span>Data Analysis</span>
            <span>Data Visualization</span>
            <span>Problem Solving</span>
            <span>Communication</span>
            <span>Customer Service</span>
            <span>Documentation</span>
            <span>Research</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeading
              title="Featured Projects"
              subtitle="Projects that demonstrate my technical and problem-solving skills."
            />

            <a href="https://github.com/" className="text-link">
              View All Projects →
            </a>
          </div>

          <div className="projects-grid">
            <Project
              image="/projects/portfolio.jpg"
              title="Personal Portfolio Website"
              description="A responsive portfolio website built with Next.js, React, and TypeScript to showcase my experience, skills, and projects."
              tags={["Next.js", "React", "TypeScript", "CSS"]}
              github="https://github.com/"
              demo="#"
            />

            <Project
              image="/projects/data-analysis.jpg"
              title="Data Analysis Dashboard"
              description="Analyzed a dataset using Python and SQL to identify trends and created visualizations for better decision-making."
              tags={["Python", "SQL", "Pandas", "Matplotlib"]}
              github="https://github.com/"
              demo="#"
            />

            <Project
              image="/projects/llm.jpg"
              title="LLM Performance Analysis"
              description="Evaluated and compared the performance of multiple large language models using quantitative metrics and analysis."
              tags={["Python", "Jupyter", "Data Analysis", "LLMs"]}
              github="https://github.com/"
              demo="#"
            />
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="resume-section">
        <div className="container">
          <div className="resume-box">
            <div className="resume-icon">📄</div>

            <div className="resume-content">
              <p className="resume-label">MY RESUME</p>

              <h2>Interested in learning more?</h2>

              <p>
                Take a look at my full resume for additional information
                about my education, experience, and skills.
              </p>
            </div>

            <a href="/resume.pdf" className="button button-primary">
              View Resume ↓
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-box">
            <div>
              <p className="contact-label">LET&apos;S CONNECT</p>

              <h2>
                I&apos;m always open to new opportunities,
                collaborations, and interesting conversations.
              </h2>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:your.email@example.com"
                className="button button-primary"
              >
                ✉ &nbsp; Get In Touch
              </a>

              <div className="social-links">
                <a href="https://github.com/" aria-label="GitHub">
                  GitHub
                </a>

                <a href="https://linkedin.com/" aria-label="LinkedIn">
                  LinkedIn
                </a>

                <a
                  href="mailto:your.email@example.com"
                  aria-label="Email"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <p>
            © {new Date().getFullYear()} Armando Castaneda Villalobos
          </p>

          <p>Built with Next.js, React &amp; TypeScript</p>
        </div>
      </footer>
    </main>
  );
}


/* ================================
   Components
================================ */

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>

      <div className="heading-line"></div>

      <p>{subtitle}</p>
    </div>
  );
}


function Experience({
  icon,
  title,
  company,
  date,
  location,
  bullets,
}: {
  icon: string;
  title: string;
  company: string;
  date: string;
  location: string;
  bullets: string[];
}) {
  return (
    <div className="experience-item">
      <div className="experience-company-icon">
        {icon}
      </div>

      <div className="experience-info">
        <h3>{title}</h3>

        <p className="company">{company}</p>

        <p className="experience-meta">
          {date} &nbsp;·&nbsp; {location}
        </p>
      </div>

      <ul className="experience-bullets">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}


function Project({
  image,
  title,
  description,
  tags,
  github,
  demo,
}: {
  image: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={`${title} project`}
          className="project-image"
        />
      </div>

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            ◉ GitHub
          </a>

          <a href={demo} target="_blank" rel="noopener noreferrer">
            ↗ View Project
          </a>
        </div>
      </div>
    </article>
  );
}