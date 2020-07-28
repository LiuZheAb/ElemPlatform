// 流程化嵌入页面
import React, { Component } from 'react';
import Header from "../../../../components/Header";
import { dataflowUrl } from "../../../../assets/url";

export default class index extends Component {
    render() {
        return (
            <div style={{ width: "100vw", height: "100vh", border: "none" }}>
                <Header></Header>
                <iframe src={dataflowUrl} frameBorder="0" title="dataflow" style={{ width: "100%", height: "calc(100% - 50px)", marginTop: 50 }}></iframe>
            </div>
        )
    }
}
