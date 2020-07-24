// 可视化帮助文档 
import React, { Component } from 'react'

export default class viz extends Component {
    render() {
        return (
            <div className="document">
                <div className="document-title">
                    <h1>Elem Visualization 帮助文档</h1>
                </div>
                <div className="document-content">
                    <h2>1、基本介绍（概述）</h2>
                    <p className="indent-2">Elem Visualization是多平台的二维，三维的模型可视化应用程序，用户可以使用现有的模型数据进行显示。</p>
                    <p className="indent-2">支持并行，可以运行于单处理器的工作站，也可以运行于分布式存储器的大型计算机。</p>
                    <p className="indent-2">用JavaScript编写，基于VTK（visualization ToolKit）开源库开发，图形用户界面用QT开发。</p>
                    <p className="indent-2">重要特点：</p>
                    <p className="indent-2">多种文件格式模型数据，可以对模型进行多种显示操作。</p>
                    <h2>2、运行环境</h2>
                    <p className="indent-2">Windows/Linux系统</p>
                    <p className="indent-2">浏览器：</p>
                    <p className="indent-2">Google Chrome、Firefox、MicroSoft Edge等其他主流浏览器</p>
                    <h2>3、界面介绍</h2>
                    <p className="indent-2">左侧：模型文件类型</p>
                    <p className="indent-2">顶部：工具栏</p>
                    <p className="indent-2">右侧：模型显示区</p>
                    <img src={require("../../assets/images/document1.png")} alt="" />
                    <h2>4、功能操作介绍</h2>
                    <h3>4.1 可视化功能</h3>
                    <p className="indent-2">在模型显示区域，鼠标滚轮放大缩小。</p>
                    <h3>4.2 复位</h3>
                    <p className="indent-2">当模型不在视口中心时，将模型定位到中心并恢复原始大小。</p>
                    <img src={require("../../assets/images/document2.png")} alt="" />
                    <h3>4.3 3d旋转</h3>
                    <p className="indent-2">模型显示默认功能，跟随鼠标任意旋转。</p>
                    <img src={require("../../assets/images/document3.png")} alt="" />
                    <h3>4.4 轴旋转</h3>
                    <p className="indent-2">围绕垂直与视口中心的轴进行旋转。</p>
                    <img src={require("../../assets/images/document4.png")} alt="" />
                    <h3>4.5 平移</h3>
                    <p className="indent-2">跟随鼠标拖动进行水平方向平移。</p>
                    <img src={require("../../assets/images/document5.png")} alt="" />
                    <h3>4.6 显示为实体单元</h3>
                    <p className="indent-2">模型默认显示为实体单元。</p>
                    <h3>4.7 显示为网格</h3>
                    <p className="indent-2">将模型以网格形式进行显示。</p>
                    <img src={require("../../assets/images/document6.png")} alt="" />
                    <h3>4.8 显示为点</h3>
                    <p className="indent-2">将模型以point形式进行显示。</p>
                    <img src={require("../../assets/images/document7.png")} alt="" />
                    <h3>4.9 坐标轴</h3>
                    <p className="indent-2">在视口左下方显示坐标轴。</p>
                    <img src={require("../../assets/images/document8.png")} alt="" />
                    <h3>4.10 显示边框</h3>
                    <p className="indent-2">根据模型的边界用一个六面体包裹模型，每个顶点显示边界值。</p>
                    <img src={require("../../assets/images/document9.png")} alt="" />
                    <h3>4.11 色标卡</h3>
                    <p className="indent-2">在视口右下方显示色标卡。</p>
                    <h3>4.12 数据结果显示/隐藏</h3>
                    <p className="indent-2">显示或隐藏模型的颜色，默认情况下显示模型颜色。</p>
                    <img src={require("../../assets/images/document10.png")} alt="" />
                    <h3>4.13 光照</h3>
                    <p className="indent-2">沿当前视口方向，添加光照，增加模型亮度。</p>
                    <img src={require("../../assets/images/document11.png")} alt="" />
                    <h3>4.14 截屏</h3>
                    <p className="indent-2">把当前视口截屏，保存为图片，默认为浏览器下载目录。</p>
                    <img src={require("../../assets/images/document12.png")} alt="" />
                    <h3>4.15 设置属性</h3>
                    <p className="indent-2">根据不同类型的模型，可进行调整色标样式、模型透明度、材料号选择、模型结果切换、矢量显示/隐藏、调整矢量大小和调整显示范围等属性。</p>
                    <img src={require("../../assets/images/document13.png")} alt="" />
                </div>
            </div >
        )
    }
}