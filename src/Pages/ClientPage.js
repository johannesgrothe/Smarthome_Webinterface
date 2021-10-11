import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ClientContainer from "../components/container/ClientContainer";
import DataManager from "../components/DataManager";

export default class ClientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: []
        }
        this.refresh = this.refresh.bind(this)
    }

    refresh() {
        let dataManager = new DataManager()
        dataManager.getInfo("info/clients")
            .then(res => {
                this.setState(res)
        })

    }

    componentDidMount() {
        this.refresh()
    }

    render() {
        console.log("data: ", this.state.clients)
        return (
            <div>
                <Container>
                    <Row>
                        {this.state.clients.map((client_info, index) => {
                            return (
                                <Col xs={12} md={6} lg={4} style={{marginTop: 10}}><ClientContainer
                                    client_data={client_info} key={index} refresh={this.refresh}/></Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

