import { ReactElement } from "react";
import { Container } from "react-bootstrap";

interface GadgetInfoContainerProps {
  // TODO: this will get more once the restructuring of the gadgets is done
  id: string;
  type: number;
}

export function GadgetInfoContainer(
  props: GadgetInfoContainerProps
): ReactElement {
  return (
    <Container>
      <p>
        id: {props.id}
        <br />
        type: {props.type}
        <br />
        <br />
        <br />
        <br />
        <br />
      </p>
    </Container>
  );
}
