import React, {Component, useState} from "react";
import {Button, Card, Col, Image, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {getAPIAddress} from "../GetAPIAddress";
import {format} from "react-string-format";
import ToggleGadgetButton from "../Buttons/gadget buttons/OnOffButtonGadget";
import RotationSpeedButton from "../Buttons/gadget buttons/RotationSpeedButton";
import LightLevelButton from "../Buttons/gadget buttons/LightLevelButton";

export default class GadgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChild: true,
            characteristics: this.props.gadget_data.characteristics
        }
        this.updateGadget = this.updateGadget.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    updateGadget = () => {
        this.props.refresh()
    }

    render() {
        this.props.gadget_data.characteristics.map((gadget_characteristic, index) => {
            this.gadget_value = gadget_characteristic.value
            this.state.characteristic = gadget_characteristic
            return this.gadget_value
        })
        return(
            <Card>
                <Card.Title>
                    <div>
                        <p>
                            Name: {this.props.gadget_data.name}<br/>
                            type: {this.props.gadget_data.type}
                        </p>
                    </div>
                </Card.Title>
                <Card.Body>
                    <Col>
                        <Row>
                            <Col md={2}>
                                <Row>
                                    <ToggleGadgetButton
                                        name={this.props.gadget_data.name}
                                        data={this.gadget_value}
                                        gadgetFn={this.updateGadget}
                                    />
                                </Row>
                                <Row>
                                    {this.props.gadget_data.type !== 3 ? null : <RotationSpeedButton
                                        name={this.props.gadget_data.name}
                                        data={this.state.characteristic.step}
                                    />}
                                </Row>
                                <Row>
                                    {this.props.gadget_data.type !== 1 ? null : <LightLevelButton
                                        name={this.props.gadget_data.name}
                                        data={this.state.characteristic.max}
                                    />}
                                </Row>
                            </Col>
                            <Col>
                                <h3>characteristics:</h3>
                                <p>
                                    max: {this.state.characteristic.max}<br/>
                                    min: {this.state.characteristic.min}<br/>
                                    step: {this.state.characteristic.step}<br/>
                                    port_mapping: {this.state.characteristic.port_mapping}<br/>
                                    type: {this.state.characteristic.type}<br/>
                                    value: {this.state.characteristic.value}<br/>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Card.Body>
            </Card>
        )
    }
}