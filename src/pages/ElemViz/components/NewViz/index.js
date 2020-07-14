import React, { Component } from 'react';
import { Form, Input, Upload, Button, message } from 'antd';
import axios from "axios";
import "./index.less";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { baseUrl } from "../../assets/url";
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const normFile = e => {
    if (Array.isArray(e)) {
        return e;
    }
    if (e.fileList[0].response) {
        return e.fileList[0].response.iconUrl;
    }
    return e && e.fileList;
};
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('只能上传 JPG/PNG 格式文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('文件大小必须小于2MB');
    }
    return isJpgOrPng && isLt2M;
}

export default class index extends Component {
    state = {
        loading: false,
    };
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            this.setState({
                imageUrl: info.file.response.iconUrl,
                loading: false,
            })
        }
    };
    onFinish = values => {
        let { name, desc, img } = values;
        localStorage.setItem("newProjectName", name)
        let _this = this;
        if (!this.state.loading) {
            axios({
                method: 'post',
                url: baseUrl + '/vtkCreate',
                data: {
                    projectName: name,
                    projectDesc: desc,
                    iconUrl: img,
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.data.state === 1) {
                    _this.props.history.push("/newviz/uploadData")
                    message.success("新建成功", 2);
                } else if (response.data.state === 2) {
                    message.error("项目创建失败");
                }

            })
            // .catch(function (error) {
            //     message.error("服务器无响应", 2);
            // });
        } else {
            message.warning("图片未上传完成，请稍候", 2)
        }
    };
    render() {
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <div className="newviz-content">
                <Form {...layout} name="init-project" onFinish={this.onFinish}>
                    <Form.Item name={['name']} label="项目名称" rules={[{ required: true, message: "请输入项目名称" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['desc']} label="项目描述" rules={[{ required: true, message: "请输入项目描述" }]}>
                        <Input.TextArea autoSize={{ minRows: 4 }} />
                    </Form.Item>
                    <Form.Item name={["img"]} label="预览图" valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload
                            name="vtkIcon"
                            listType="picture-card"
                            showUploadList={false}
                            action={baseUrl + "/vtkIcon"}
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={baseUrl + imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} style={{ textAlign: "center" }}>
                        <Button type="primary" htmlType="submit">下一步</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}