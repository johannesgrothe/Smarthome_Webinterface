import React, {Component, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Card, Col, Container, Row} from "react-bootstrap";
import {NodePath as axios} from "@babel/traverse";



export default class MainPage extends Component {
    constructor(){
        super();
        this.state= {
            info: [],
        };
    }

componentDidMount() {
    const API_IP = window.location.host.split(':')[0]
    const MY_API_URL = `http://${API_IP}:4999/info`
    fetch(MY_API_URL)
        .then(response => {return response.json()})
        .then(res => {
            this.setState({info: res})
            console.log("state", this.state.info)
        })
}

    render() {
        return(
            <Container width="100%">
                <Row className="justify-content-center">
                    <Col>
                        <Card>
                            <Card.Body> Bridge Name: {this.state.info.bridge_name} </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row height="30%">
                    <Col>
                        <Card>
                            <Card.Body>Number of Chips connected to Bridge: {this.state.info.client_count}</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>Number of Gadgets connected to Bridge: {this.state.info.gadget_count}</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>Number of Connectors connected to Bridge: {this.state.info.connector_count}</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row height="30%">
                    <Col>
                        <Card>
                            <Card.Body>running since: {this.state.info.running_since}</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>sw branch/commit: {this.state.info.software_branch} / {this.state.info.software_commit}</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>tbd: </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}
