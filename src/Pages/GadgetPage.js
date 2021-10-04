import React, {Component} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {getAPIAddress} from "../components/GetAPIAddress";
import GadgetContainer from "../components/container/GadgetContainer";
import GadgetManager from "../components/DataManager"
import DataManager from "../components/DataManager";

export default class GadgetPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gadgets: [],
        }
        this.fetchGadgetData = this.fetchGadgetData.bind(this)
    }

    fetchGadgetData(){
        let dataManager = new DataManager()
        dataManager.getInfo("gadgets")
            .then(res => {
                this.setState(res)
            })
    }

    componentDidMount() {
        this.fetchGadgetData()
    }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        {this.state.gadgets.map((gadget_info, index) => {
                            return (
                                <Col xs={14} md={8} lg={6} style={{marginTop:10}}><GadgetContainer gadget_data={gadget_info} key={index} refresh={this.fetchGadgetData}/></Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}