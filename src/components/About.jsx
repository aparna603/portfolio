import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import bgimage from "../assets/image3.gif";
import resumepdf from "../assets/resume.pdf";
import Button from "react-bootstrap/Button";
import "../App.css";

const About = () => {
  return (
    <>
      <Container
        id="home"
        fluid
        className="animate"
        style={{ height: "700px", paddingTop: "70px" }}
      >
        <div className="row">
          <div className="col-md-6 image-1">
            <Image src={bgimage} fluid />
          </div>
          <div className="col-md-6">
            <span className="about-text">ABOUT ME</span>
            <span className="name"> Hi, I am Rishabh Tanwar!</span>
            <br />
            <span style={{ color: "#334146" }}>
              With over 8 years of hands-on experience, my focus has been on
              analyzing, designing, and developing a wide range of applications,
              spanning client, server, and enterprise domains. I'm proficient in
              utilizing cutting-edge technologies such as Kotlin, Flutter, and
              Java to create robust solutions tailored to specific project
              requirements.
            </span>
            <div className="row two-button">
              <Button
                size="sm"
                className="col-md-3 custom-btn"
                style={{ marginRight: "2px" }}
                href={resumepdf}
                target="_blank"
              >
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "8px", marginBottom: "6px" }}
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="col-md-3 round-border"
                href="#contact"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
        <div className="arrow-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-chevron-down arrow"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </Container>
    </>
  );
};
export default About;
