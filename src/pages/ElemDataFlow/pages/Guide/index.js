/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 流程化产品首页
 */

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../../../../components/Header";
import "./index.less";


export default class index extends Component {
    render() {
        return (
            <div id="dataflow" style={{ minHeight: '100vh' }}>
                <Header></Header>
                <div className="banner">
                    <img className="name" src={require("../../../../assets/images/dataflow.png")} alt="Elem DataFlow" />
                    <div className="animate-box">
                        <div className="animate-block" />
                        <div className="animate-block" />
                        <div className="animate-block" />
                        <div className="animate-block" />
                    </div>
                    <Link to="/dataflow/home" className="btn-block">
                        <button className="btn btn-primary btn-ghost btn-shine">开 始</button>
                    </Link>
                </div>
            </div>
        )
    }
}