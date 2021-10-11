import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import DataManager from "../components/DataManager";


export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bridge_data: []
        }
    }

    componentDidMount() {
        let dataManager = new DataManager()
        dataManager.getInfo("info/bridge")
            .then(res => {
                this.setState({bridge_data: res})
            })
    }

    render() {
        console.log("bridge_data: ", this.state.bridge_data)
        return (
            <Container width="100%">
                <Row className="justify-content-center" style={{marginBottom: 20, marginTop: 20}}>
                    <Col>
                        <Card style={{ width: '100%' }}>
                            <Card.Title style={{paddingLeft: 10, paddingTop: 10}}>
                                Bridge
                            </Card.Title>
                            <Card.Body>
                                <p>
                                    Bridge Name: {this.state.bridge_data.bridge_name}<br/>
                                    running since: {this.state.bridge_data.running_since}<br/>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginBottom: 20}}>
                    <Col>
                        <Card>
                            <Card.Title style={{paddingLeft: 10, paddingTop: 10}}>
                                Bridge Software version info
                            </Card.Title>
                            <Card.Body>
                                <p>
                                    software branch: {this.state.bridge_data.software_branch}<br/>
                                    software commit: {this.state.bridge_data.software_commit}<br/>
                                    python version: {this.state.bridge_data.python_version}<br/>
                                    PIO version: {this.state.bridge_data.platformio_version}<br/>
                                    pipenv version: {this.state.bridge_data.pipenv_version}<br/>
                                    git version: {this.state.bridge_data.git_version}<br/>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title style={{paddingLeft: 10, paddingTop: 10}}>
                                Clients
                            </Card.Title>
                            <Card.Body> Number of Clients: {this.state.bridge_data.client_count} </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title style={{paddingLeft: 10, paddingTop: 10}}>
                                Gadgets
                            </Card.Title>
                            <Card.Body> Number of Gadgets: {this.state.bridge_data.gadget_count} </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title style={{paddingLeft: 10, paddingTop: 10}}>
                                Connectors
                            </Card.Title>
                            <Card.Body> Number of Connectors: {this.state.bridge_data.connector_count} </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}
