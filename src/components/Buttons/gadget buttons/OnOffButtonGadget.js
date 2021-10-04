import {Button} from "react-bootstrap";
import React, {Component} from "react";
import DataManager from "../../DataManager.js";

export default class OnOffButtonGadget extends Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.buttonText = ""
        this.characteristic = 3
    }

    updateGadgetStatus = () => {
        let gadgetStatus;
        if (this.props.data === 0) {
            gadgetStatus = 1
        } else {
            gadgetStatus = 0
        }
        return gadgetStatus
    }

    async handleChange() {
        let gadgetStatus = this.updateGadgetStatus();
        let req = new DataManager();
        const response = await req.generateGadgetRequest(this.props.name, this.characteristic, gadgetStatus);
        console.log("response from ToggleStatus request (POST): ", response)
        this.props.gadgetFn(gadgetStatus)
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <Button   type={"checkbox"}
                          size={"sm"}
                          onClick={this.handleChange}
                          variant={"outline-primary"}
                > {this.props.data === 0 ? "Off" : "On"}
                </Button>
            </>
        )
    }
}

