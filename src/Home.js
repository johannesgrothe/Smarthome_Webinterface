import React, {Component, useState} from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {getAPIAddress} from "./components/GetAPIAddress";
import HomeContainer from "./components/HomeContainer";
import GadgetContainer from "./components/GadgetContainer";


export default class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            info: [],
        };
    }

    componentDidMount() {
        const API_URL = getAPIAddress("info")
        fetch(API_URL)
            .then(response => {
                return response.json()
            })
            .then(res => {
                this.setState({info: res})
                console.log("state", this.state.info)
            })
    }

    render() {
        return (
            <Container width="100%">
                <Row className="justify-content-center">
                    <Col>
                        <Card>
                            <Card.Title>
                                Bridge
                            </Card.Title>
                            <Card.Body>
                                <p>
                                    Bridge Name: {this.state.info.bridge_name}<br/>
                                    running since: {this.state.info.running_since}<br/>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Clients
                            </Card.Title>
                            <Card.Body> Number of Clients: {this.state.info.client_count} </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Gadgets
                            </Card.Title>
                            <Card.Body> Number of Gadgets: {this.state.info.gadget_count} </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Connectors
                            </Card.Title>
                            <Card.Body> Number of Connectors: {this.state.info.connector_count} </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Bridge Software version info
                            </Card.Title>
                            <Card.Body>
                                <p>
                                    software branch: {this.state.info.software_branch}<br/>
                                    software commit: {this.state.info.software_commit}<br/>
                                    python version: {this.state.info.python_version}<br/>
                                    PIO version: {this.state.info.platformio_version}<br/>
                                    pipenv version: {this.state.info.pipenv_version}<br/>
                                    git version: {this.state.info.git_version}<br/>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*<HomeContainer props={this.state.info}/>*/}
            </Container>
        )
    }

}
