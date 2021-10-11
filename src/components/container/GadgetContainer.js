import React, {Component} from "react";
import {Card, Col, Row} from "react-bootstrap";
import ToggleGadgetButton from "../Buttons/gadget buttons/OnOffButtonGadget";
import RotationSpeedButton from "../Buttons/gadget buttons/RotationSpeedButton";
import LightLevelButton from "../Buttons/gadget buttons/LightLevelButton";

export default class GadgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characteristics: this.props.gadget_data.characteristics
        }
        console.log("gadget_data: ", this.state.characteristics)
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
                                    step: {this.state.characteristic.step_value}<br/>
                                    type: {this.state.characteristic.type}<br/>
                                    value: {this.state.characteristic.true_value}<br/>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Card.Body>
            </Card>
        )
    }
}