import React, {Component, useState} from "react";
import {Card, Col, Container, Image, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

function RestartClientButton(client_id) {
    const [value, setValue] = useState([1]);
    const handleChange = (val) => setValue(val);

    return (
        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
            <ToggleButton variant={"outline-primary"} value={1}>
            </ToggleButton>
        </ToggleButtonGroup>
    )
}


export default class HomeContainer extends Component {
    constructor(props) {
        super(props);
        console.log("home data: ", props)
        this.state = {
            client_data: this.props.client_data
        }
    }

    render() {
        return(
            <Row className="justify-content-center">
                <Col>
                    <Card>
                        {/*<Card.Body> Bridge Name: {this.state.client_data.bridge_name} </Card.Body>*/}
                    </Card>
                </Col>
            </Row>

        )
    }
}