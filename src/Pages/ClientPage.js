import React, {Component} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {getAPIAddress} from "../components/GetAPIAddress";
import ClientContainer from "../components/container/ClientContainer";
import getClientData from "../components/DataManager"
import DataManager from "../components/DataManager";

export default class ClientPage extends Component {
    constructor() {
        super();
        this.state = {
            clients: [],
        }
    }

    componentDidMount() {
        let dataManager = new DataManager()
        dataManager.getInfo("clients")
            .then(res => {
                this.setState(res)
            })
    }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        {this.state.clients.map((client_info, index) => {
                            return (
                                <Col xs={12} md={6} lg={4} style={{marginTop:10}}><ClientContainer client_data={client_info} key={index}/></Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

