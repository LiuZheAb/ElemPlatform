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
                    <img className="name" src={require("../../assets/images/dataflow.png")} alt="" />
                    <div className="animate-box">
                        <div className="animate-block" src={require("../../assets/images/block4.png")} alt="" />
                        <div className="animate-block" src={require("../../assets/images/block1.png")} alt="" />
                        <div className="animate-block" src={require("../../assets/images/block3.png")} alt="" />
                        <div className="animate-block" src={require("../../assets/images/block2.png")} alt="" />
                        <div className="animate-block" src={require("../../assets/images/block4.png")} alt="" />
                    </div>
                    <Link to="/dataflow/home" className="btn-block">
                        <button className="btn btn-primary btn-ghost btn-shine">开 始</button>
                    </Link>
                </div>
            </div>
        )
    }
}