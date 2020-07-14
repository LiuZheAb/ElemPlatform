import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from "../../components/Header";
import Sider from "../../components/Sider";
import Content from "../../components/Content";

export default class index extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header />
                <Layout >
                    <Sider />
                    <Content />
                </Layout>
            </Layout>
        )
    }
}