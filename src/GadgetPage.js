import React, {Component} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {getAPIAddress} from "./components/GetAPIAddress";
import GadgetContainer from "./components/GadgetContainer";

export default class GadgetPage extends Component {
    constructor() {
        super();
        this.state = {
            gadgets: [],
        }
    }

    componentDidMount() {
        const API_URL = getAPIAddress("gadgets")
        fetch(API_URL)
            .then(response => {
                return response.json()
            })
            .then(res => {
                this.setState(res)
                console.log("state", this.state.gadgets)
            })

    }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        {this.state.gadgets.map((gadget_info, index) => {
                            console.log("iter data: ", gadget_info)
                            return (
                                <Col xs={14} md={8} lg={6} style={{marginTop:10}}><GadgetContainer gadget_data={gadget_info} key={index}/></Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}