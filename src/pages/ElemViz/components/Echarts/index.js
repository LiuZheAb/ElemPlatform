import React, { Component } from 'react';
import { echartsUrl } from "../../assets/url";

export default class index extends Component {
    render() {
        return (
            <iframe src={echartsUrl} title="echarts" frameBorder="0" style={{ width: "100%", height: "100%" }}></iframe>
        )
    }
}
