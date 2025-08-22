import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Syed Shayan Haider Kazmi</span>
            {" "}from <span className="purple">Islamabad, Pakistan.</span>
            <br />
            I am currently working as a <span className="purple">Freelancer.</span>
            <br />
            I have completed my <span className="purple">Bachelors in Computer Science</span>
            {" "}from National University of Technology Islamabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies 🍿
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books & History 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating Pizza & Burgers 🍕🍔
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling ✈️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Not just a coder, but a storyteller."
          </p>
          <footer className="blockquote-footer">Shayan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
