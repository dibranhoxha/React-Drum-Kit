import React from 'react'

export default class Switch extends React.Component {
    render() {
        return (
            <div className="switch-container">
                <b>Power</b>
                <div className="switch-button-container-off">
                    <div className="switch-button"></div>
                </div>
            </div>
        )
    }
}
