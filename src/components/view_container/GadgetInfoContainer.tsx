import { ReactElement } from "react";
import { Container } from "react-bootstrap";

export interface GadgetInfoContainerProps {
  // TODO: this will get more once the restructuring of the gadgets is done
  id: string;
  type: number;
}

export function GadgetInfoContainer(props: {
  gadget_info: GadgetInfoContainerProps;
}): ReactElement {
  return (
    <Container>
      <p>
        id: {props.gadget_info.id}
        <br />
        type: {props.gadget_info.type}
        <br />
        <br />
        <br />
        <br />
        <br />
      </p>
    </Container>
  );
}
