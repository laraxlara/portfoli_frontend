import React from "react";
import Layout from "../components/layout";

import "../styles/Projects.css";
const Projects = () => {
  return (
    <Layout>
      <div className="projects-container">
        <div class="container">
          <div class="project">
            <div class="content">
              <h2>EXECUTIVE LIMO SERVICE</h2>
              <p>
                Executive Limo Service is a luxury transportation service from
                Miami. <br />
                Gatsby / Node JS
              </p>
              <a
                href="http://executivelimoservicemiami.com/"
                className="project-button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          <div class="project">
            <div class="content">
              <h2>Beer Store</h2>
              <p>
                <br />
                React JS / Node JS
              </p>
              <a
                href="https://thecrafthut.onrender.com/"
                className="project-button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          <div class="project">
            <div class="content">
              <h2>Restaurant</h2>
              <p>Gatsby</p>
              <a
                href="https://restaurant-ee3a.onrender.com/"
                className="project-button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          <div class="project">
            <div class="content">
              <h2>Personal Branding Agency</h2>
              <p>React JS</p>
              <a
                href="https://personal-branding-agency.onrender.com/"
                className="project-button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          <div class="project">
            <div class="content">
              <h2>Space</h2>
              <p>Next JS</p>
              <a
                href="https://jovial-lollipop-98d58f.netlify.app/"
                className="project-button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          <div class="project">
            <div class="content">
              <h2>Iceland</h2>
              <p>HTML / CSS / JS</p>
              <a
                href="https://visiticeland.onrender.com/"
                className="project-button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
