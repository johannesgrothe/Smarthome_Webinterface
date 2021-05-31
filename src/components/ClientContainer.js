import React, {Component, useState} from "react";
import {Card, Col, Image, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import ToggleGadgetButton from "./OnOffButtonGadget";
import ToggleClientButton from "./OnOffButtonClient";

export default class ClientContainer extends Component {
    constructor(client_data) {
        super();
        console.log("data: ", client_data)
        this.state = client_data
    }

    render() {
        return(
            <Card>
                <Card.Title>{this.state.client_data.name}</Card.Title>
                <Card.Body>
                    <Row>
                        <Col md={3}>
                            <Row>
                                <ToggleClientButton name={this.state.client_data.name}/>
                            </Row>
                            <Row>
                            </Row>

                        </Col>
                        <Col>
                            <p>
                                boot mode: {this.state.client_data.boot_mode}<br/>
                                created: {this.state.client_data.created}<br/>
                                is_active: {this.state.client_data.is_active}<br/>
                                last_connected: {this.state.client_data.last_connected}<br/>
                                {/*<a>port_mapping: {client_data.port_mapping}</a>*/}
                                sw_branch: {this.state.client_data.sw_branch}<br/>
                                sw_uploaded: {this.state.client_data.sw_uploaded}<br/>
                                sw_version: {this.state.client_data.sw_version}<br/>
                            </p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
