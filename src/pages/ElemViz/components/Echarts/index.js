/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 可视化产品嵌入echarts页面
 */

import React, { Component } from 'react';
import { echartsUrl } from "../../assets/url";

export default class index extends Component {
    render() {
        return (
            <iframe src={echartsUrl} title="echarts" frameBorder="0" style={{ width: "100%", height: "100%" }}></iframe>
        )
    }
}
