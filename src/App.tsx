import React, { useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-portfolio fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <span>&lt;</span>John Ferlin<span>/&gt;</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="container hero-content">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="hero-title">John Ferlin Limoran</h1>
              <p className="hero-role">.NET Full-Stack Developer</p>
              <p className="hero-subtitle">
                Building scalable enterprise solutions with modern technologies.
                Passionate about clean code, robust architectures, and delivering business value.
              </p>
              <div className="hero-buttons">
                <a href="#experience" className="btn btn-hero btn-hero-primary">View Experience</a>
                <a href="#contact" className="btn btn-hero btn-hero-outline">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about-card animate-on-scroll">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">A glimpse into my professional journey</p>
                <p className="about-text">
                  Experienced .NET developer with extensive background in full-stack development,
                  enterprise applications, and financial systems. I specialize in building robust,
                  scalable solutions using ASP.NET, React.js, and cloud technologies. With a strong
                  foundation in both frontend and backend development, I bring ideas to life through
                  clean, maintainable code and thoughtful architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies and tools I work with</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 animate-on-scroll">
              <div className="skill-category">
                <h3>Languages</h3>
                <div>
                  {['C#', 'PHP', 'JavaScript', 'TypeScript','Python', 'HTML5', 'CSS', 'SQL', 'VB.NET'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 animate-on-scroll">
              <div className="skill-category">
                <h3>Frameworks</h3>
                <div>
                  {['ASP.NET', '.NET Core', 'Laravel', 'React.js','FASTAPI', 'SignalR', 'Bootstrap'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 animate-on-scroll">
              <div className="skill-category">
                <h3>Web Tech</h3>
                <div>
                  {['REST APIs', 'OpenAPI', 'Responsive Design', 'SOAP API', 'Material UI'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 animate-on-scroll">
              <div className="skill-category">
                <h3>Databases</h3>
                <div>
                  {['MS SQL Server', 'Oracle DB', 'SSMS', 'Oracle SQL Developer'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 animate-on-scroll">
              <div className="skill-category">
                <h3>Development Tools</h3>
                <div>
                  {['Visual Studio', 'VS Code', 'Git', 'GitHub', 'TortoiseSVN', 'JIRA', 'Cherwell'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">My career journey and accomplishments</p>
          </div>

          <div className="timeline-card animate-on-scroll">
            <div className="timeline-card-header">
              <h4>Cantier System Inc</h4>
            </div>
            <div className="timeline-card-body">
              <h5>.NET Developer (Assigned to ASE Technology Holding Co., Ltd.)</h5>
              <span className="timeline-date">July 2025 - Present</span>
              <ul>
                <li>Develop and maintain Manufacturing Execution System (MES) applications using ASP.NET Web Forms, SignalR, JavaScript, and Oracle Database</li>
                <li>Created a reusable DLL for global Oracle database connectivity and common operations</li>
                <li>Developed DART (Downtime Analysis Report Tool) Maintenance modules and Dashboard</li>
                <li>Built Problem Maintenance and Parameter Maintenance modules with dynamic input fields</li>
                <li>Developed Count Variance functionality for Lot Move Process validation</li>
                <li>Created DART User Owner and Department Maintenance modules for access management</li>
              </ul>
            </div>
          </div>

          <div className="timeline-card animate-on-scroll">
            <div className="timeline-card-header">
              <h4>Nityo Infotech</h4>
            </div>
            <div className="timeline-card-body">
              <h5>.NET Developer (Assigned to PBCOM)</h5>
              <span className="timeline-date">Aug 2024 - May 2025</span>
              <p>Developed core modules for a Financial Management System (FMS) using ASP.NET Core, React.js, REST API, and MS SQL.</p>
              <ul>
                <li>Maintenance Module: Managed User Levels, Group Descriptions, and User Roles</li>
                <li>Journal Entry Module: Enabled schedule setup, Excel-based upload, and Month-End Close processing</li>
                <li>On-Demand Data Entry Module: Real-time input of GL/SL Balances categorized by Division Group</li>
                <li>Administrator Module: Visibility into Error Logs and System Logs for diagnostics</li>
                <li>Report Portal: Pre-Revaluation Balances, GL/SL Balances, Comparative GL/SL Balances</li>
              </ul>
            </div>
          </div>

          <div className="timeline-card animate-on-scroll">
            <div className="timeline-card-header">
              <h4>Infolink and Teligent Systems</h4>
            </div>
            <div className="timeline-card-body">
              <h5>Programmer/Support (Assigned to PNB)</h5>
              <span className="timeline-date">Jan 2022 - Aug 2024</span>
              <ul>
                <li>Implemented MFA on ARS, APAS, GFC, IRIS, and Web Portal systems</li>
                <li>Implemented Active Directory integration for multiple banking systems</li>
                <li>Created fixes for VA findings and MBSS compliance across all systems</li>
                <li>Provided production support using JIRA and Cherwell for UAT and PROD deployments</li>
              </ul>
            </div>
          </div>

          <div className="timeline-card animate-on-scroll">
            <div className="timeline-card-header">
              <h4>Neltex Development Corp. Inc.</h4>
            </div>
            <div className="timeline-card-body">
              <h5>Junior Programmer Analyst</h5>
              <span className="timeline-date">Nov 2019 - Dec 2021</span>
              <ul>
                <li>Maintained and supported existing system functionality</li>
                <li>Migrated web application to new and latest framework</li>
                <li>Created new web application for company use</li>
              </ul>
            </div>
          </div>

          <div className="timeline-card animate-on-scroll">
            <div className="timeline-card-header">
              <h4>IOT Technology Inc</h4>
            </div>
            <div className="timeline-card-body">
              <h5>Junior Web Developer</h5>
              <span className="timeline-date">Mar 2019 - Aug 2019</span>
              <ul>
                <li>Created API for web app and Android app</li>
                <li>Developed web view for EasyCashOut web application</li>
                <li>Built backend procedures for data fetching</li>
              </ul>
            </div>
          </div>

          <div className="timeline-card animate-on-scroll">
            <div className="timeline-card-header">
              <h4>We Support Incorporated Company</h4>
            </div>
            <div className="timeline-card-body">
              <h5>Software Support Engineer (Assigned to Amdocs Philippines)</h5>
              <span className="timeline-date">Mar 2018 - Jan 2019</span>
              <ul>
                <li>Managed test result database and provided first-level analysis</li>
                <li>Generated reports and dashboards for monitoring</li>
                <li>Provided support in SQL optimization procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-card animate-on-scroll">
                <h2 className="section-title" style={{ color: 'white' }}>Get In Touch</h2>
                <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  I'm always open to discussing new projects and opportunities
                </p>
                <div className="contact-item">
                  <a href="mailto:johnferlinlimoran03@gmail.com">
                    <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    johnferlinlimoran03@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <a href="https://www.linkedin.com/in/john-ferlin-limoran-074858304/" target="_blank" rel="noopener noreferrer">
                    <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} John Ferlin Limoran. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
