import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={12}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
      </Col>
      <Col md={12} style={{ display: "flex", justifyContent: "center" }}>
        <GitHubCalendar
          username="Shayan-qazmi"  // ✅ Your GitHub username
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Col>
    </Row>
  );
}

export default Github;
