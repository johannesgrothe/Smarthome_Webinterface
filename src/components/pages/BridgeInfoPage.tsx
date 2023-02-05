import { Container } from "react-bootstrap";
import React from "react";
import { StyleSheet } from "../navigation/Navigation";
import { useResourceContext } from "react-admin";

export function BridgeInfoPage() {
  const record = useResourceContext();
  if (!record) {
    return null;
  }

  return (
    <>
      {/*TODO: replace inline styling*/}
      <h3 style={{ padding: 20 }}> Bridge Info </h3>
      <Container style={styles.mainContainer}></Container>
    </>
  );
}

const styles: StyleSheet = {
  mainContainer: {
    padding: 20,
  },
};

interface BridgeInfoProps {
  bridge_name: string;
  git_version: string;
  pipenv_version: string;
  platformio_version: string;
  python_version: string;
  running_since: string;
  software_branch: string;
  software_commit: string;
}

function RenderBridgeInfo(props: BridgeInfoProps) {
  return (
    <Container>
      <p>
        bridge_name: {props.bridge_name} <br />
        git_version: {props.git_version} <br />
        pipenv_version: {props.pipenv_version} <br />
        platformio_version: {props.platformio_version} <br />
        python_version: {props.python_version} <br />
        running_since: {props.running_since} <br />
        software_branch: {props.software_branch} <br />
        software_commit: {props.software_commit} <br />
      </p>
    </Container>
  );
}
