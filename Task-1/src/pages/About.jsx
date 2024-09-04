import React from "react";
import Skill from "./Skill";
import Project from "./Project";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="box">
          <h1>About Me</h1>
          <p>
            I’m Irfan Ansari, a dedicated and passionate MERN stack developer
            with a keen eye for creating innovative and efficient web solutions.
            My journey in web development has equipped me with a robust
            understanding of both front-end and back-end technologies, enabling
            me to craft seamless and dynamic websites that not only meet but
            exceed client expectations. My expertise spans across HTML, CSS,
            JavaScript, and frameworks like React, allowing me to build
            responsive, user-friendly interfaces. On the back-end, my
            proficiency with Node.js, Express, and MongoDB ensures that the
            applications I develop are robust, scalable, and secure. I am
            committed to continuous learning and staying updated with the latest
            trends and best practices in the industry. This drive allows me to
            incorporate cutting-edge technologies and methodologies into my
            work, ensuring that every project is at the forefront of innovation.
            What sets me apart is my dedication to writing clean, maintainable
            code that stands the test of time. I believe that the foundation of
            any successful project lies in clear communication, meticulous
            planning, and a deep understanding of the client’s needs. Over the
            years, I have worked on diverse projects ranging from simple
            websites to complex web applications, each time ensuring that the
            final product aligns perfectly with the client’s vision. My goal is
            to not just deliver a project, but to build a digital experience
            that resonates with users and drives results. I am always eager to
            take on new challenges and collaborate with like-minded
            professionals. Let’s connect and bring your ideas to life. You can
            reach out to me on <a href="https://www.linkedin.com/">LinkedIn</a>{" "}
            or explore my work and contributions on{" "}
            <a href="https://www.github.com/">GitHub</a>.
          </p>
        </div>
      </section>
      <Skill />
    </>
  );
}

export default About;
