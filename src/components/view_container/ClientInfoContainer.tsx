import { Container } from "react-bootstrap";

interface ClientInfoProps {
  api_version: string;
  boot_mode: number;
  created: string;
  is_active: boolean;
  last_connected: string;
  name: string;
  port_mapping: object;
  runtime_id: number;
  sw_branch: string;
  sw_commit: string;
  sw_uploaded: string;
}

export function ClientInfoContainer(props: any) {
  const clientProps: ClientInfoProps = props.props;
  console.log(clientProps);

  return (
    <Container>
      <p>
        api_version: {clientProps.api_version} <br />
        boot_mode: {clientProps.boot_mode}
        <br />
        created: {clientProps.created}
        <br />
        is_active: {clientProps.is_active}
        <br />
        last_connected: {clientProps.last_connected}
        <br />
        name: {clientProps.name}
        <br />
        runtime_id: {clientProps.runtime_id}
        <br />
        sw_branch: {clientProps.sw_branch}
        <br />
        sw_commit: {clientProps.sw_commit}
        <br />
        sw_uploaded: {clientProps.sw_uploaded}
        <br />
      </p>
    </Container>
  );
}
