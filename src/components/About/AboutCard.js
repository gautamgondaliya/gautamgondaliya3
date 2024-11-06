import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Gautam Gondaliya </span> 
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently a passionate full-stack developer with a focus on building innovative and accessible web applications. 
            I have completed my studies in software development and have gained practical experience through an internship at Softcoding Solution Company.
            <br />
            <br />
            Apart from coding, I enjoy a range of activities that keep me energized and inspired:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Experimenting with new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing User Interfaces
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving real-world problems with code
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new programming languages and frameworks
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to build user-centered, accessible products that make a difference!"
          </p>
          <footer className="blockquote-footer">Gautam Gondaliya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
