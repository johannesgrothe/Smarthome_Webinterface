import React, {Component, useState} from "react";
import {Button, Card, Col, Image, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {getAPIAddress} from "./GetAPIAddress";
import {format} from "react-string-format";
import ToggleGadgetButton from "./OnOffButtonGadget";

export default class GadgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.gadget_data,
            gadget_characteristic: [],
            gadget_value: [],
            response_body: [],
            reload: false
        }
    }

    render() {
        this.state.data.characteristics.map((gadget_characteristic, index) => {
            this.gadget_value = gadget_characteristic.value
            this.gadget_characteristic = gadget_characteristic
            return this.gadget_value
        })
        console.log("gadget_value: ", this.gadget_value)
        return(
            <Card>
                <Card.Title>
                    <div>
                        <p>
                            Name: {this.state.data.name}<br/>
                            type: {this.state.data.type}
                        </p>
                    </div>
                </Card.Title>
                <Card.Body>
                    <Col>
                        <Row>
                            <Col md={2}>
                                <ToggleGadgetButton
                                    name={this.state.data.name}
                                    data={this.gadget_value}
                                />
                            </Col>
                            <Col>
                                <a>characteristics:
                                    <div>
                                        <p>
                                            max: {this.gadget_characteristic.max}<br/>
                                            min: {this.gadget_characteristic.min}<br/>
                                            step: {this.gadget_characteristic.step}<br/>
                                            port_mapping: {this.gadget_characteristic.port_mapping}<br/>
                                            type: {this.gadget_characteristic.type}<br/>
                                            value: {this.gadget_characteristic.value}<br/>
                                        </p>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Card.Body>
            </Card>
        )
    }
}