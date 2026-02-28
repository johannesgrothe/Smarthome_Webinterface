import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { BridgeInfoPage } from "../pages/BridgeInfoPage";
import { HomePage } from "../pages/HomePage";
import { GadgetInfoPage } from "../pages/GadgetInfoPage";
import { ClientInfoPage } from "../pages/ClientInfoPage";
import { store } from "../../store/store";
import { LogInPage } from "../pages/LogInPage";

export function Navigation() {
  const [isAuthorized, setIsAuthorized] = useState(
    store.getState().auth.isAuthorized
  );

  return (
    <Container style={styles.mainContainer}>
      <Row>
        <RenderInterfaceHeader />
      </Row>
      {/*TODO: replace inline styling*/}
      <Row style={{ height: "100%", width: "100%" }}>
        <Col style={styles.navCol}>
          {!isAuthorized ? (
            <LogInRoutes setIsAuthorized={setIsAuthorized} />
          ) : (
            <RenderContent />
          )}
        </Col>
      </Row>
    </Container>
  );
}

function RenderContent() {
  return (
    <>
      <Container style={styles.navContainer}>
        <RenderSideTabNavigator />
      </Container>
      <Container style={styles.contentContainer}>
        <WebRoutes />
      </Container>
    </>
  );
}

function RenderInterfaceHeader() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>LibertyHome</Col>
          <Col>smartify yer own place</Col>
        </Row>
      </Container>
    </>
  );
}

function RenderSideTabNavigator() {
  return (
    <Col>
      <Row>
        <Link to={"/"}> Home </Link>
      </Row>
      <Row>
        <Link to={"/BridgeInfo"}> Bridge </Link>
      </Row>
      <Row>
        <Link to={"/ClientInfo"}> Client </Link>
      </Row>
      <Row>
        <Link to={"/GadgetInfo"}> Gadget </Link>
      </Row>
    </Col>
  );
}

function LogInRoutes(props: {
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<LogInPage setIsAuthorized={props.setIsAuthorized} />}
      />
    </Routes>
  );
}

function WebRoutes() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/BridgeInfo"} element={<BridgeInfoPage />} />
        <Route path={"/ClientInfo"} element={<ClientInfoPage />} />
        <Route path={"/GadgetInfo"} element={<GadgetInfoPage />} />
      </Routes>
    </>
  );
}

// move this to separate file containing common interfaces
export interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
  mainContainer: {
    width: "100%",
    flexDirection: "column",
    display: "flex",
    height: "100%",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
  },
  navContainer: {
    width: "15%",
    flexDirection: "row",
    backgroundColor: "#000000",
  },
  navCol: {
    display: "flex",
    justifyContent: "left",
    height: "100%",
  },
  contentContainer: {
    width: "85%",
    maxHeight: "100%",
    height: "100%",
  },
  contentCol: {
    width: "100%",
  },
};
