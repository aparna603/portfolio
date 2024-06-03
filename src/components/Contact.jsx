import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <>
      <Container id="contact" fluid className="contact-container">
        {/* <Card className="contact-card"> */}
        <div className="about-text">
          <span>CONTACT ME</span>
        </div>
        <div style={{ marginTop: "25px" }}>
          <Card className="contact-card">
            <Form>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="name" placeholder="name" />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="email" />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" placeholder="message" rows={3} />
              </Form.Group>
              <Button
                variant="outline-secondary"
                size="sm"
                className="col-md-3 round-border"
              >
                Send message
              </Button>
            </Form>
          </Card>
        </div>

        {/* </Card> */}
      </Container>
    </>
  );
};
export default Contact;
