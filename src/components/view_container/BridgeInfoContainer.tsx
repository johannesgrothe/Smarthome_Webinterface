import { Container } from "react-bootstrap";
import React from "react";

export interface BridgeInfoProps {
  bridge_name: string;
  git_version: string;
  pipenv_version: string;
  platformio_version: string;
  python_version: string;
  running_since: string;
  software_branch: string;
  software_commit: string;
}

export function RenderBridgeInfo(props: BridgeInfoProps) {
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

export interface BridgeUpdateCheckResponse {
  current_branch_name: string;
  current_branch_release_date: string;
  current_commit_hash: string;
  new_branch_name: string;
  new_branch_release_date: string;
  new_commit_hash: string;
  num_commits_between_branches: number;
  update_available: boolean;
}

export function RenderUpdateCheckData(props: {
  bridge_data: BridgeUpdateCheckResponse;
}) {
  return (
    <Container>
      <p>
        current branch name: {props.bridge_data.current_branch_name}
        <br />
        current branch release date:{" "}
        {props.bridge_data.current_branch_release_date}
        <br />
        current commit hash: {props.bridge_data.current_commit_hash}
        <br />
        new branch name: {props.bridge_data.new_branch_name}
        <br />
        new branch release date: {props.bridge_data.new_branch_release_date}
        <br />
        new commit hash: {props.bridge_data.new_commit_hash}
        <br />
        number of commits between branches:{" "}
        {props.bridge_data.num_commits_between_branches}
        <br />
      </p>
    </Container>
  );
}
