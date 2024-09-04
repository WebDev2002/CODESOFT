import React from "react";
import "./components.css";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-box">
          <div className="mail-section">
            <h6>Mail</h6>
            <form action="" method="post">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </form>
          </div>
          <div className="menu">
          <div className="box">
            <h6>Achievements</h6>
            <ul>
              <li>Completed 50+ Projects</li>
              <li>Top Contributor on GitHub</li>
              <li>Featured in Tech Magazine</li>
              <li>Certified Full Stack Developer</li>
            </ul>
          </div>
          <div className="box">
            <h6>Team</h6>
            <ul>
              <li>Irfan Ansari - MERN Stack Developer</li>
              <li>Collaborators and Mentors</li>
              <li>Community Contributors</li>
            </ul>
          </div>
          <div className="box">
            <h6>Work with Me</h6>
            <ul>
              <li>Open to Freelance Projects</li>
              <li>Available for Collaborations</li>
              <li>Mentorship Opportunities</li>
            </ul>
          </div>
          <div className="box">
            <h6>Follow Me</h6>
            <ul>
              <li>
                <a
                  href="https://github.com/irfanansari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/irfanansari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/irfanansari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@irfanansari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
