import React, { Component } from 'react';

export default class index extends Component {
    render() {
        return (
            <div style={{ width: "100vw", height: "100vh", border: "none", overflow: "hidden" }}>
                <iframe src="http://192.168.2.5:3000" frameBorder="0" title="dataflow" style={{ width: "100%", height: "100%" }}></iframe>
            </div>
        )
    }
}
