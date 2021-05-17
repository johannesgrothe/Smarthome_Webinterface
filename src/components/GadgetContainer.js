import React, {Component, useState} from "react";
import {Button, Card, Col, Image, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {getAPIAddress} from "./GetAPIAddress";
import {format} from "react-string-format";

async function generate_request(name, data) {

    let req_data = {
        characteristic: 3,
        value: data
    };

    const API_URL = getAPIAddress(format('gadgets/{0}/set_characteristic', name));
    console.log("url", API_URL)
    let response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(req_data)
    });

    let result = await response.json();
    // alert(result.status);
    console.log("result", result)
    return response
}

function ToggleGadgetButton({name, data}) {

    function handleChange() {
        console.log("data_value: ", data)
        const gadget_value = data
        let gadget_val;
        if (data != 0) {
            gadget_val = data - gadget_value
        } else {
            gadget_val = 1
        }
        console.log("gadget_value: ", gadget_val)
        const response = generate_request(name, gadget_val)
        console.log("response: ", response)
    };

    return (
        <>
            <Button   type={"checkbox"}
                      size={"sm"}
                      onClick={handleChange}
                      variant={"outline-primary"}
                      value={data}>ON
            </Button>
        </>
    )
}

export default class GadgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.gadget_data,
            gadget_characteristic: [],
            gadget_value: [],
            response_body: []
        }
    }

    render() {
        this.state.data.characteristics.map((gadget_characteristic, index) => {
            this.gadget_value = gadget_characteristic.value
            this.gadget_characteristic = gadget_characteristic
            return this.gadget_value
        })
        // console.log("res_body: ", this.response)
        // this.response.body.map((res_body, index) => {
        //     this.response_body = res_body.body
        //     return this.response_body
        // })
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
                            <Col>
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