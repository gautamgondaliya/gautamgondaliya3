import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import bizzcommsync from "../../Assets/Projects/bizzcommsync.png";
import threed from "../../Assets/Projects/threed.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bizzcommsync}
              isBlog={false}
              title="Bizzcommsync App"
              description="BizCommsync is an innovative application designed for streamlining business communications. It offers features like team collaboration, file sharing, real-time chat, and project management to enhance workplace productivity. Built using React.js, Node.js, and Firebase, BizCommsync provides a seamless user experience with real-time messaging and notifications."
              ghLink="https://github.com/gautamgondaliya/bizcommsync-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={threed}
              isBlog={false}
              title="3D Product Site"
              description="A dynamic web application that allows users to customize 3D products, such as shirts, by selecting different colors, logos, and textures. The site provides real-time previews, AI-generated logos, and custom textures, creating a unique user experience. Built with React.js, Three.js for 3D rendering, and Framer Motion for smooth animations, this project combines cutting-edge web technologies to offer an interactive and responsive platform."
              ghLink="https://github.com/gautamgondaliya/3D-product-site"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
