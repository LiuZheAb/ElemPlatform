/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 可视化产品首页
 */

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./index.less";


export default class index extends Component {
    render() {
        return (
            <div id="elemviz" style={{ minHeight: '100vh' }}>
                <Header></Header>
                <div className="banner">
                    <img className="name" src={require("../../../../assets/images/visualization.png")} alt="Elem Visualization" />
                    <div className="animate-box">
                        <img src={require("../../../../assets/images/block2.png")} alt="block" />
                        <img src={require("../../../../assets/images/block3.png")} alt="block" />
                        <img src={require("../../../../assets/images/block4.png")} alt="block" />
                    </div>
                    <Link to="/viz/vizlist" className="btn-block">
                        <button className="btn btn-primary btn-ghost btn-shine">开 始</button>
                    </Link>
                </div>
            </div>
        )
    }
}