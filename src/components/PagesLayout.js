import React, {Component} from "react";
import './PagesLayout.css';
import MainPage from "./Pages/MainPage";
import ChipPage from "./Pages/ChipPage";
import {Col, Container, Row} from "react-bootstrap";
import {Route, Router, Switch} from "react-router";
import Sidebar from "./Navbar/Sidebar";
import NavigationBar from "./Navbar/Navbar";

const PagesLayout = () => {
    return(
        // <div>
        //     <table width="100%">
        //         <td>
        //             <div className="flex float-md-left">
        //                 <SideNavbar />
        //             </div>
        //         </td>
        //         <td width="80%">
        //             <div align="center">
        //                 <MainPage />
        //             </div>
        //         </td>
        //     </table>
        // </div>
        <React.Fragment>
            <Router>
                <NavigationBar />
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/chippage" component={ChipPage} />
                </Switch>
            </Router>
        </React.Fragment>
        // <Container fluid>
        //     <Row>
        //         <Col xs={2} id="sidebar-wrapper">
        //             <SideNavPage />
        //         </Col>
        //         <Col  xs={10} id="page-content-wrapper">
        //             <MainPage/>
        //         </Col>
        //     </Row>
        //
        // </Container>
    );
}

export default PagesLayout;