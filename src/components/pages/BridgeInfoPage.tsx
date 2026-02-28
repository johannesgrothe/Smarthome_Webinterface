import { Button, Col, Container, Row } from "react-bootstrap";
import {
  useBridgeInfoQuery,
  useBridgeUpdateCheckQuery,
  useBridgeUpdateExecuteQuery,
} from "../../services/bridgeApiSlice";
import { BuildQueryArgs } from "../../utils/buildQueryArgs";
import React, { useState } from "react";
import { StyleSheet } from "../navigation/Navigation";
import {
  RenderBridgeInfo,
  RenderUpdateCheckData,
} from "../view_container/BridgeInfoContainer";

export function BridgeInfoPage() {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [skip, setSkip] = useState(true);
  const {
    data: bridge_data,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useBridgeInfoQuery(BuildQueryArgs());

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

  const {
    data: bridge_update_data,
    isSuccess: isCheckSuccess,
    isError: isCheckError,
    error: checkError,
  } = useBridgeUpdateCheckQuery(BuildQueryArgs(), { skip });

  let reRenderPrevention: boolean | undefined;

  if (isCheckSuccess) {
    console.log(skip);
    reRenderPrevention = bridge_update_data.update_available;
  }
  if (isCheckError) {
    console.log(checkError);
  }
  // TODO: remove this shitty workaround...
  if (reRenderPrevention) {
    setIsUpdateAvailable(reRenderPrevention);
  }

  const handleOnClick = () => {
    setSkip(false);
  };

  return (
    <>
      <h3 style={pageStyles.heading}> Bridge Info </h3>
      <Container style={pageStyles.mainContainer}>
        <Col>
          <Row>{content}</Row>
          {isUpdateAvailable ? (
            <>
              <RenderUpdateCheckData bridge_data={bridge_update_data} />
              <RenderBridgeUpdateCheck isUpdateAvailable={isUpdateAvailable} />
            </>
          ) : (
            <Button onClick={handleOnClick}>check for updates</Button>
          )}
        </Col>
      </Container>
    </>
  );
}

const pageStyles: StyleSheet = {
  mainContainer: {
    padding: 20,
  },
  heading: {
    padding: 20,
  },
};

function RenderBridgeUpdateCheck(props: { isUpdateAvailable: boolean }) {
  const [skip, setSkip] = useState(true);

  const {
    isSuccess: isExecuteSuccess,
    isLoading: isExecuteLoading,
    isError: isExecuteError,
    error: executeError,
  } = useBridgeUpdateExecuteQuery(BuildQueryArgs(), { skip });

  let content;

  if (isExecuteLoading) {
    content = <h3>still updating...</h3>;
  }
  if (isExecuteSuccess) {
    content = <h3>update applied successfully!</h3>;
    setSkip(true);
  }
  if (isExecuteError) {
    content = <h3>error while updating!</h3>;
    console.log(executeError);
  }

  const handleClick = () => {
    setSkip(false);
  };

  return (
    <Container>
      <Col>
        {props.isUpdateAvailable ? (
          <>
            {content}
            <Button onClick={handleClick}>Update Bridge</Button>
          </>
        ) : (
          <h3>bridge is up to date</h3>
        )}
      </Col>
    </Container>
  );
}
