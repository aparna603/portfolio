import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import kotlin from "../assets/images4.jpeg";
import Java from "../assets/java.svg";
import flutter from "../assets/flutter.png";
import rxJava from "../assets/rx-java.png";
import coroutine from "../assets/coroutine.png";
import android from "../assets/android.png";

const Skills = () => {
  return (
    <Container
      id="Skills"
      style={{ height: "600px"}}
      fluid
    >
      <div>
        <span className="skills">MY SKILLS</span>
      </div>
      <div className="row skill-row">
        <span className="col-md-1 icon-transition">
          <Image src={android} className="skill-icon" />
          <br />
          <label>ANDROID</label>
        </span>
        <span className="col-md-1 icon-transition">
          <Image src={kotlin} className="skill-icon" />
          <br />
          <label>KOTLIN</label>
        </span>
        <span className="col-md-1 icon-transition">
          <Image src={Java} className="skill-icon" />
          <br />
          <label>JAVA</label>
        </span>
        <span className="col-md-1 icon-transition">
          <Image src={flutter} className="skill-icon" />
          <br />
          <label>FLUTTER</label>
        </span>
        <span className="col-md-1 icon-transition">
          <Image src={rxJava} className="skill-icon" />
          <br />
          <label>RX-JAVA</label>
        </span>
        <span className="col-md-1 icon-transition">
          <Image src={coroutine} className="skill-icon" />
          <br />
          <label>COROUTINE</label>
        </span>
      </div>
    </Container>
  );
};
export default Skills;
