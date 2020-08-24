/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 流程化产品嵌入页面
 */

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
