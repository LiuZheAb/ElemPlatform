/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 可视化产品内容页
 */

import React, { Component,lazy } from 'react';
import { Layout } from 'antd';

const Header = lazy(() => import('../../components/Header'));
const Sider = lazy(() => import('../../components/Sider'));
const Content = lazy(() => import('../../components/Content'));

export default class index extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh', paddingTop: 50 }}>
                <Header />
                <Layout >
                    <Sider />
                    <Content />
                </Layout>
            </Layout>
        )
    }
}