import React from "react";
import "./components.css";
import { Typewriter } from "react-simple-typewriter";
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectDeatils from '../projectDeatils/ProjectDetails'
import aboutImg from '../assets/about-img.jpg'
import profileImg from '../assets/profile-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Herosection() {
  const limit = 3;
  const displaySomeData = ProjectDeatils.slice(0, limit)
  return (
    <>
      <section className="hero-section">
        <div className="box left-box">
          <h1>Hi, There</h1>
          <h1>I'm Irfan Ansari</h1>
          <p>
            I am{" "}
            <Typewriter
              words={[
                "a Mern Stack Developer.",
                "a UI/UX Designer.",
                "a Creator.",
              ]}
              loop={0}
              // cursor
              // cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <a href="../assets/Irfan_Ansari_Resume.pdf"  download="Irfan_Ansari_Resume.pdf" >Resume</a>
          <div className="icons">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faYoutube} />

          </div>
        </div>
        <div className="box right-box">
          <div className="profile-img">
            <img src={profileImg} alt="" />
          </div>
        </div>
      </section>

      <section className="about">
      <h1>About Me</h1>
      <div className="aboutBoxs">
        <div className="box left-box">
          <img src={aboutImg} alt="" />
        </div>
        <div className="box right-box">
          <p>
            I’m Irfan Ansari, a dedicated MERN stack developer passionate about
            crafting innovative web solutions. With expertise in both front-end
            and back-end development, I create responsive, user-friendly
            websites that align with client needs. I thrive on learning new
            technologies and continuously improving my skill set to stay ahead
            in the fast-evolving web development landscape. My approach
            emphasizes clean, maintainable code and delivering projects on time.
            Let’s connect and bring your ideas to life. You can reach out to me
            on <a href="">LinkedIn</a> or view my projects on <a href="">GitHub</a>.
          </p>
        </div>
        </div>
      </section>

      <section className="skill">
        <h1>Skill</h1>
        <div className="bars">
      <div>
        <h5>HTML & CSS</h5>     
        <ProgressBar variant='danger' now={95} label={`${95}%`}/>
        </div>
      <div>
        <h5>JAVASCRIPT</h5>
        <ProgressBar variant='warning' now={80} label={`${80}%`} />
        </div>
      <div>
        <h5>REACTJS</h5>
        <ProgressBar variant='info' now={80} label={`${80}%`} />
        </div>
      <div>
        <h5>NODEJS</h5>
        <ProgressBar variant="success" now={75} label={`${75}%`} />
        </div>
      <div>
        <h5>EXPRESS</h5>
        <ProgressBar variant='warning' now={75} label={`${75}%`} />
        </div>
    <div>
        <h5>MONGODB</h5>
        <ProgressBar variant="success" now={75} label={`${75}%`} />
        </div>
    </div>
      </section>

      <section className="project">
        <h1>Project</h1>
        <div className="projects">
        {displaySomeData.map((project, index)=>(
          <div key={index} className="project-box">
             <div className="thumbnail"><img src={project.img} alt="" /></div>
             <div className="details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#" className="btn btn-primary">Source Code</a>
             </div>
          </div>
        ))}
        
        </div>

      </section>
    </>
  );
}

export default Herosection;
