import { Col, Container, Row } from "react-bootstrap";
import { ClientInfoContainer } from "../view_container/ClientInfoContainer";

export function ClientInfoPage() {

  let content;

  return (
    <>
      <Container>
        <Row>
          <h1> Client Info Page </h1>
          <Container>
            <Col>{content}</Col>
          </Container>
        </Row>
      </Container>
    </>
  );
}
