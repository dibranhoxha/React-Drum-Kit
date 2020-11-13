import React from 'react'

export default class Switch extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (
            <div className="switch-container">
                <b>{this.props.name}</b>
                <div className={this.props.clicked ? "switch-button-container-on" : "switch-button-container-off"} onClick={this.props.func}>
                    <div className="switch-button"></div>
                </div>
            </div>
        )
    }
}
