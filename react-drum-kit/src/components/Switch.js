import React from 'react'

export default class Switch extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }
    render() {
        return (
            <div className="switch-container">
                <b>Power</b>
                <div className="switch-button-container-on">
                    <div className="switch-button" onClick={this.handleClick}></div>
                </div>
            </div>
        )
    }
}
