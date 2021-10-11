import React, {Component} from "react";
import {Card, Col, Row} from "react-bootstrap";
import ToggleClientButton from "../Buttons/client buttons/OnOffButtonClient";

export default class ClientContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client_data: this.props.client_data
        }
        console.log("client_data: ", this.state.client_data)
        this.updateClient = this.updateClient.bind(this)
    }

    updateClient(){
        this.props.refresh()
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return(
            <Card>
                <Card.Title>{this.state.client_data.name}</Card.Title>
                <Card.Body>
                    <Row>
                        <Col md={3}>
                            <Row>
                                <ToggleClientButton name={this.state.client_data.name} clientFn={this.updateClient}/>
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
                            </p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
