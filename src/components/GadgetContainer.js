import React, {Component, useState} from "react";
import {Card, Col, Image, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

function ToggleGadgetButton () {
    const [value, setValue] = useState([1]);
    const handleChange = (val) => setValue(val);

    return (
        <ToggleButtonGroup type="checkbox" size={"sm"} value={value} onChange={handleChange}>
            <ToggleButton variant={"outline-primary"} value={1}>
                <Image src="https://i.pinimg.com/200x150/ec/5b/ee/ec5bee181ba96018838c1a4ee97d5afa.jpg"/>
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default class GadgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.gadget_data,
            gadget_characteristic: []
        }
        console.log("data: ", this.state.data)
    }

    render() {
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
                            <Col>
                                <ToggleGadgetButton />
                            </Col>
                            <Col>
                                <a>characteristics: {this.state.data.characteristics.map((gadget_characteristic, index) => {
                                    console.log("gadget_characteristic: ", gadget_characteristic);
                                    return (
                                        <div>
                                            <p>
                                                max: {gadget_characteristic.max}<br/>
                                                min: {gadget_characteristic.min}<br/>
                                                step: {gadget_characteristic.step}<br/>
                                                {/*port_mapping: {gadget_characteristic.port_mapping}<br/>*/}
                                                type: {gadget_characteristic.type}<br/>
                                                value: {gadget_characteristic.value}<br/>
                                            </p>
                                        </div>
                                    )
                                })}
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Card.Body>
            </Card>
        )
    }
}