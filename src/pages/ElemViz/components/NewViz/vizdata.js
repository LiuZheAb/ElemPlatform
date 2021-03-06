/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 可视化产品上传数据源文件
 */

import React, { Component } from 'react';
import { Form, Upload, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { baseUrl } from "../../assets/url";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
// 获取文件列表
const normFile = e => {
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

export default class index extends Component {
    state = {
        loading: false,
        projectName: localStorage.getItem("newProjectName")
    };
    // 上传后调用
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            this.setState({
                imageUrl: info.file.response.url,
                loading: false,
            });
        }
    };
    // 上传成功后调用
    onFinish = values => {
        if (!this.state.loading) {
            this.props.history.push("/viz/vizlist");
        }
        localStorage.removeItem("newProjectName");
    };
    render() {
        return (
            <div className="vizdata-content" style={{ maxWidth: 600 }}>
                <Form {...layout} onFinish={this.onFinish}>
                    <Form.Item label="Dragger">
                        <Form.Item name="data" valuePropName="fileList" getValueFromEvent={normFile} noStyle rules={[{ required: true, message: "请上传数据源文件" }]}>
                            <Upload.Dragger name="uploadFile" action={baseUrl + "/vtkUpload"} data={{ projectName: this.state.projectName }} onChange={this.handleChange}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">点击或拖拽文件至此区域以上传</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} style={{ textAlign: "center" }}>
                        <Button type="primary" htmlType="submit">完成</Button>
                    </Form.Item>
                </Form>
            </div >
        )
    }
}