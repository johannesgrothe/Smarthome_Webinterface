import { Card, Col, Container, Row } from "react-bootstrap";
import { StyleSheet } from "../navigation/Navigation";

export function HomePage() {
  return (
    <Container fluid style={styles.container}>
      <Row md={4}>
        <Col sm={4} style={styles.col}>
          <Card style={{ width: "100%" }}>
            <Card.Title style={{ paddingLeft: 10, paddingTop: 10 }}>
              <h1>Welcome to the LibertyHome user interface!</h1>
            </Card.Title>
            <Card.Body style={{ paddingLeft: 10, paddingTop: 10 }}>
              <p>Fill this with something sensible</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

let styles: StyleSheet = {
  col: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
};
