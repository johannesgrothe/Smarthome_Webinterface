import React, {Component, useState} from "react";
import {Button, Card, Col, Image, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {getAPIAddress} from "../GetAPIAddress";
import {format} from "react-string-format";
import ToggleGadgetButton from "../Buttons/gadget buttons/OnOffButtonGadget";
import RotationSpeedButton from "../Buttons/gadget buttons/RotationSpeedButton";
import LightLevelButton from "../Buttons/gadget buttons/LightLevelButton";
import DataContainer from "./DataContainer";

export default class GadgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChild: true,
            gvalue: null
        }
        this.setGadgetValue = this.setGadgetValue.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    setGadgetValue = (value) => {
        this.setState({
            gvalue: value
        })
        return "deine Mutter ist bei Munchkin nur die Hälfte wert";
    }

    render() {
        console.log("props: ", this.props.gadget_data)
        this.props.gadget_data.characteristics.map((gadget_characteristic, index) => {
            this.gadget_value = gadget_characteristic.value
            this.gadget_characteristic = gadget_characteristic
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
                                        gadgetFn={this.setGadgetValue}
                                    />
                                </Row>
                                <Row>
                                    {this.props.gadget_data.type !== 3 ? null : <RotationSpeedButton
                                        name={this.props.gadget_data.name}
                                        data={this.gadget_characteristic.step}
                                    />}
                                </Row>
                                <Row>
                                    {this.props.gadget_data.type !== 1 ? null : <LightLevelButton
                                        name={this.props.gadget_data.name}
                                        data={this.gadget_characteristic.max}
                                    />}
                                </Row>
                            </Col>
                            <Col>
                                <DataContainer data={this.gadget_characteristic} type={"gadget"} status={this.gvalue}/>
                            </Col>
                        </Row>
                    </Col>
                </Card.Body>
            </Card>
        )
    }
}