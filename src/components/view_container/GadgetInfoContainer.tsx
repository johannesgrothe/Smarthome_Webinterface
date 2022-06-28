import { ReactElement } from "react";
import { Container } from "react-bootstrap";

interface GadgetInfoContainerProps {
  id: string;
  type: number;
}

export function GadgetInfoContainer(props: any): ReactElement {
  const gadget_info: GadgetInfoContainerProps = props.props;
  return (
    <Container>
      <p>
        id: {gadget_info.id}
        <br />
        type: {gadget_info.type}
        <br />
        <br />
        <br />
        <br />
        <br />
      </p>
    </Container>
  );
}
