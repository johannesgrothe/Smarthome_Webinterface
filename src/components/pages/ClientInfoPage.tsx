import { Col, Container, Row } from "react-bootstrap";
import { useClientInfoQuery } from "../../services/clientApiSlice";
import { BuildQueryArgs } from "../../utils/buildQueryArgs";
import {
  ClientInfoContainer,
  ClientInfoProps,
} from "../view_container/ClientInfoContainer";

export function ClientInfoPage() {
  const {
    data: client_data,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useClientInfoQuery(BuildQueryArgs("info/clients"));

  let content;

  if (isLoading) {
    content = <p> fetching data... </p>;
  }
  if (isSuccess) {
    content = client_data.clients.map((client_info: ClientInfoProps) => (
      <ClientInfoContainer client_info={client_info} key={client_info.name} />
    ));
    console.log("client_data: ", client_data);
  }
  if (isError) {
    content = <p> shit happened </p>;
    console.log("error occurred while fetching client data: ", error);
  }

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
