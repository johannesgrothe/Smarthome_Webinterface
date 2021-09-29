import React, {Component} from "react";

export default class DataContainer extends Component {
    constructor(props) {
        super(props);
        console.log("type: ", this.props.type)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <>
                <a>
                    <div>
                        <h3>
                            characteristics:
                        </h3>
                    </div>
                    <div>
                        {this.props.type === "gadget" ?
                            <p>
                                max: {this.props.data.max}<br/>
                                min: {this.props.data.min}<br/>
                                step: {this.props.data.step}<br/>
                                port_mapping: {this.props.data.port_mapping}<br/>
                                type: {this.props.data.type}<br/>
                                value: {this.props.status}<br/>
                            </p> :
                            <p>
                                boot mode: {this.state.client_data.boot_mode}<br/>
                                created: {this.state.client_data.created}<br/>
                                is_active: {this.state.client_data.is_active}<br/>
                                last_connected: {this.state.client_data.last_connected}<br/>
                                {/*<a>port_mapping: {client_data.port_mapping}</a>*/}
                                sw_branch: {this.state.client_data.sw_branch}<br/>
                                sw_uploaded: {this.state.client_data.sw_uploaded}<br/>
                                sw_version: {this.state.client_data.sw_version}<br/>
                            </p>
                        }
                    </div>
                </a>
            </>
        )
    }
}