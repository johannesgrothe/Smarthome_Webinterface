import React, {Component} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {getAPIAddress} from "./components/GetAPIAddress";

export default class ChipPage extends Component {
    constructor() {
        super();
        this.state = {
            "client_count": 2,
                "clients": [
                {
                    "boot_mode": 3,
                    "created": "2021-02-22 15:27:48",
                    "is_active": false,
                    "last_connected": "1900-01-01 00:00:00",
                    "name": "dummy_client1",
                    "port_mapping": {},
                    "sw_branch": null,
                    "sw_uploaded": null,
                    "sw_version": null
                },
                {
                    "boot_mode": 3,
                    "created": "2021-02-22 15:27:48",
                    "is_active": false,
                    "last_connected": "1900-01-01 00:00:00",
                    "name": "dummy_client2",
                    "port_mapping": {},
                    "sw_branch": null,
                    "sw_uploaded": null,
                    "sw_version": null
                }
            ]
        }
    }

    componentDidMount() {
        const API_URL = getAPIAddress("clients")
        fetch(API_URL)
            .then(response => {
                return response.json()
            })
            .then(res => {
                console.log(res)
                // this.setState({clients: res})
                console.log("state", this.state.clients)
            })

    }

    render() {
        return(
            <div>
                <Container>
                    {this.state.clients.map((client_data) => {
                        // return React.createElement("h2", null, client_data.name)
                        return (
                            <Card>
                                <Card.Title>{client_data.name}</Card.Title>
                                <Card.Body>
                                    <p>boot mode: {client_data.boot_mode}</p>
                                    <p>created: {client_data.created}</p>
                                    <p>is_active: {client_data.is_active}</p>
                                    <p>last_connected: {client_data.last_connected}</p>
                                    {/*<a>port_mapping: {client_data.port_mapping}</a>*/}
                                    <p>sw_branch: {client_data.sw_branch}</p>
                                    <p>sw_uploaded: {client_data.sw_uploaded}</p>
                                    <p>sw_version: {client_data.sw_version}</p>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Container>
            </div>
        )
    }
}