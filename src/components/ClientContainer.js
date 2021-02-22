import React, {Component} from "react";
import {Card} from "react-bootstrap";

export default class ClientContainer extends Component {
    constructor(client_data) {
        super();
        this.state = client_data
    }
    render() {
        return(
            <Card>
                <Card.Title>{this.state.client_data.name}</Card.Title>
                <Card.Body>
                    <p>boot mode: {this.state.client_data.boot_mode}</p>
                    <p>created: {this.state.client_data.created}</p>
                    <p>is_active: {this.state.client_data.is_active}</p>
                    <p>last_connected: {this.state.client_data.last_connected}</p>
                    {/*<a>port_mapping: {client_data.port_mapping}</a>*/}
                    <p>sw_branch: {this.state.client_data.sw_branch}</p>
                    <p>sw_uploaded: {this.state.client_data.sw_uploaded}</p>
                    <p>sw_version: {this.state.client_data.sw_version}</p>
                </Card.Body>
            </Card>
        )
    }
}
