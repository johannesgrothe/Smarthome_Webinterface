import { Container } from "react-bootstrap";
import { useBridgeInfoQuery } from "../../services/bridgeApiSlice";
import { BuildQueryArgs } from "../../utils/buildQueryArgs";
import React from "react";
import { StyleSheet } from "../navigation/Navigation";

export function BridgeInfoPage() {
  const {
    data: bridge_data,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useBridgeInfoQuery(BuildQueryArgs("info/bridge"));

  let content;

  if (isLoading) {
    content = <h1> fetching data... </h1>;
  }
  if (isSuccess) {
    content = RenderBridgeInfo(bridge_data);
  }
  if (isError) {
    content = <h1> something went wrong </h1>;
    console.log("error while fetching bridge data: ", error);
  }

  return (
    <>
      {/*TODO: replace inline styling*/}
      <h3 style={{ padding: 20 }}> Bridge Info </h3>
      <Container style={styles.mainContainer}>{content}</Container>
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
