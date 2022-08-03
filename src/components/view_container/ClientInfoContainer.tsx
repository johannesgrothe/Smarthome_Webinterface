import { Container } from "react-bootstrap";

export interface ClientInfoProps {
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

export function ClientInfoContainer(props: { client_info: ClientInfoProps }) {
  return (
    <Container>
      <p>
        api_version: {props.client_info.api_version} <br />
        boot_mode: {props.client_info.boot_mode}
        <br />
        created: {props.client_info.created}
        <br />
        is_active: {props.client_info.is_active}
        <br />
        last_connected: {props.client_info.last_connected}
        <br />
        name: {props.client_info.name}
        <br />
        runtime_id: {props.client_info.runtime_id}
        <br />
        sw_branch: {props.client_info.sw_branch}
        <br />
        sw_commit: {props.client_info.sw_commit}
        <br />
        sw_uploaded: {props.client_info.sw_uploaded}
        <br />
      </p>
    </Container>
  );
}
