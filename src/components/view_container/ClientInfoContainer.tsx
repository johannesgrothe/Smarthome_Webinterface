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

export function ClientInfoContainer(props: ClientInfoProps) {
  return (
    <Container>
      <p>
        api_version: {props.api_version} <br />
        boot_mode: {props.boot_mode}
        <br />
        created: {props.created}
        <br />
        is_active: {props.is_active}
        <br />
        last_connected: {props.last_connected}
        <br />
        name: {props.name}
        <br />
        runtime_id: {props.runtime_id}
        <br />
        sw_branch: {props.sw_branch}
        <br />
        sw_commit: {props.sw_commit}
        <br />
        sw_uploaded: {props.sw_uploaded}
        <br />
      </p>
    </Container>
  );
}
