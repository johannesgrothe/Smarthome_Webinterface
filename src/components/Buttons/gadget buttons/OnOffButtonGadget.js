import {Button} from "react-bootstrap";
import React, {Component} from "react";
import DataManager from "../../DataManager.js";

export default class OnOffButtonGadget extends Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        // this.buttonText = ""
        this.characteristic = 3
        this.state = {
            setGadgetValue : this.props.gadgetFn,
            buttonText : ""
        }

    }

    updateButtonText = () => {
        let gadgetStatus;
        let buttonText;
        if (this.props.data === 0) {
            gadgetStatus = 1
            buttonText = "On"
        } else {
            gadgetStatus = 0
            buttonText = "Off"
        }
        this.setState({
            buttonText: buttonText
        })
        return gadgetStatus
    }

    handleChange = () => {
        let gadgetStatus = this.updateButtonText();
        let req = new DataManager();
        const response = req.generateGadgetRequest(this.props.name, this.characteristic, gadgetStatus);
        this.state.setGadgetValue(gadgetStatus)
        console.log("response from POST: ", response)
    }

    componentDidMount() {
        this.updateButtonText();
    }

    render() {
        // if(this.props.data === 0){
        //     this.buttonText = "Off"
        // } else {
        //     this.buttonText = "On"
        // }
        return (
            <>
                <Button   type={"checkbox"}
                          size={"sm"}
                          onClick={this.handleChange}
                          variant={"outline-primary"}
                > {this.state.buttonText}
                </Button>
            </>
        )
    }
}

