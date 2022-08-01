import { Col, Container, Row } from "react-bootstrap";
import { useGadgetInfoQuery } from "../../services/gadgetApiSlice";
import { BuildQueryArgs } from "../../utils/buildQueryArgs";
import { GadgetInfoContainer } from "../view_container/GadgetInfoContainer";

export function GadgetInfoPage() {
  const {
    data: gadget_info,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGadgetInfoQuery(BuildQueryArgs("/info/gadgets"));

  let content;

  if (isLoading) {
    content = [<p>Loading...</p>];
  } else if (isSuccess) {
    content = gadget_info.gadgets.map((gadget_data: { id: string }) => {
      return <GadgetInfoContainer props={gadget_data} key={gadget_data.id} />;
    });
  } else if (isError) {
    content = [<p>{error?.toString()}</p>];
  }

  return (
    <>
      <Container>
        <Row>
          <h1> Gadget Info Page </h1>
          <Container>
            <Col>{content}</Col>
          </Container>
        </Row>
      </Container>
    </>
  );
}
