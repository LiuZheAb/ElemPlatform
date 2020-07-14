import React, { Component } from 'react';
import "./index.css";

export default class index extends Component {
    render() {
        return (
            <div className="loader-content">
                <div id="loader">
                    <div className="outer"></div>
                    <div className="inner"></div>
                </div>
            </div>

        )
    }
}
