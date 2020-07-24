// 流程化文档
import React, { Component } from 'react';

export default class dataflow extends Component {
    render() {
        return (
            <div className="document">
                <div className="document-title">
                    <h1>Elem Dataflow 帮助文档</h1>
                </div>
                <div className="document-content">
                    <h2>1、基本介绍</h2>
                    <p className="indent-2">Elem Dataflow可跨平台运行，基于JavaScript开发。</p>
                    <p className="indent-2">目的是将计算或其他程序中复杂的操作拆分成独立的节点，使用时将节点组合成流程即可使用。</p>
                    <p className="indent-2">系统具有操作便捷、复用性高等特点。</p>
                    <h2>2、运行环境</h2>
                    <p className="indent-2">Windows/Linux系统</p>
                    <p className="indent-2">浏览器：</p>
                    <p className="indent-2">Google Chrome、Firefox、MicroSoft Edge等其他主流浏览器</p>
                    <h2>3、界面介绍</h2>
                    <p className="indent-2">流程化系统的界面如下图所示，并按区域分为以下五部分：</p>
                    <ol style={{ margin: "0 0 1em 2em" }}>
                        <li>节点列表</li>
                        <li>菜单栏</li>
                        <li>操作区域</li>
                        <li>属性栏</li>
                        <li>缩略图</li>
                    </ol>
                    <img src={require("../../assets/images/document14.png")} alt="" />
                    <h2>4、功能操作介绍</h2>
                    <p className="indent-2">主要有如下几个功能：</p>
                    <ol style={{ margin: "0 0 1em 2em" }}>
                        <li>流程节点、组节点拖拽功能</li>
                        <li>流程组合、拆分组合功能</li>
                        <li>流程节点连接功能</li>
                        <li>缩略图功能</li>
                        <li>视图区功能</li>
                        <li>流程保存、读取功能</li>
                        <li>流程节点富编辑功能</li>
                    </ol>
                    <h3>4.1 流程节点、组节点拖拽功能</h3>
                    <p className="indent-2">流程化系统中，用户可将节点列表中的流程节点或组节点拖拽至右侧区域。操作方法如下：</p>
                    <p className="indent-2">鼠标按住节点列表中的流程节点或组节点，拖动至右侧区域，松开鼠标即可，如下图所示。</p>
                    <img src={require("../../assets/images/document15.png")} alt="" />
                    <p className="indent-2">通过点击已拖拽的节点，用户可选择此节点，并在右侧属性栏预览此节点的相关属性，如下图所示。</p>
                    <img src={require("../../assets/images/document16.png")} alt="" />
                    <h3>4.2 流程组合、拆分组合功能</h3>
                    <p className="indent-2">用户可将多个流程节点组合或将组合拆分成单节点。操作方法如下：</p>
                    <p className="indent-2">长按操作区域(0.5秒以上)可出现选择框，不松开鼠标继续拖拽可修改选择框大小，如下图所示，松开鼠标则可将选择框内的所有节点选中。</p>
                    <img src={require("../../assets/images/document17.png")} alt="" />
                    <p className="indent-2">选中多个节点后，用户可以通过节点右键菜单或上方菜单栏中的组合按钮组合节点，如下图所示。</p>
                    <img src={require("../../assets/images/document18.png")} alt="" />
                    <p className="indent-2">组合节点效果如下图所示。</p>
                    <img src={require("../../assets/images/document19.png")} alt="" />
                    <p className="indent-2">用户还可以通过点击节点组合的右键菜单或顶部导航栏的拆分组合按钮拆分流程组合，如下图所示。</p>
                    <img src={require("../../assets/images/document20.png")} alt="" />
                    <h3>4.3 流程节点连接功能</h3>
                    <p className="indent-2">用户按住任一节点或组合的边缘，拖动鼠标至任意其他节点或组合即可连接两个节点或组合，如下图所示，同时，节点或组合还支持自连接。</p>
                    <img src={require("../../assets/images/document21.png")} alt="" />
                    <h3>4.4 缩略图功能</h3>
                    <p className="indent-2">在系统的右下角有一个用户操作区域的缩略图。缩略图与操作区域实现了数据的双向绑定，用户的任何操作结果都可实时显示在缩略图中。</p>
                    <h3>4.5 视图区功能</h3>
                    <h4>4.5.1 拖拽视图功能</h4>
                    <p className="indent-2">用户可以通过拖拽操作区域的空白区来改变可视范围，或通过拖动缩略图来改变可视范围，并且，拖拽过程中，操作区域和缩略图同步显示，效果如下图所示，可见，流程在操作区域中的位置与在缩略图中的位置保持一致。</p>
                    <img src={require("../../assets/images/document22.png")} alt="" />
                    <h4>4.5.2 放大或缩小视图功能</h4>
                    <p className="indent-2">用户将鼠标悬停在操作区域，通过向上或向下滚动鼠标滚轮，即可实现视图区的放大或缩小功能，放大效果如下图所示。</p>
                    <img src={require("../../assets/images/document23.png")} alt="" />
                    <p className="indent-2">在放大或缩小视图后，用户还可以点击菜单栏的还原大小按钮，一键将视图区还原至初始大小。</p>
                    <h3>4.6 流程保存、读取功能</h3>
                    <p className="indent-2">系统支持将编辑完成的节点保存为JSON数据文件至本地，点击菜单栏第一个保存图标，浏览器将自动下载JSON数据文件。JSON数据文件的内容如下图所示。</p>
                    <img src={require("../../assets/images/document24.png")} alt="" />
                    <p className="indent-2">除此以外，系统还可将此格式的JSON数据文件渲染为流程，点击菜单栏第二个打开图标，读取对应文件。如下图所示，该流程为读取JSON数据文件渲染而来。</p>
                    <img src={require("../../assets/images/document25.png")} alt="" />
                    <h3>4.7 流程节点富编辑功能</h3>
                    <p className="indent-2">接下来将从菜单栏、右键菜单和其他三点分别介绍流程节点的富编辑功能。</p>
                    <h4>4.7.1 菜单栏</h4>
                    <p className="indent-2">菜单栏共有12个按钮，从左到右分别是保存、打开、撤销、恢复、全选、剪切、复制、粘贴、删除、组合、拆分组合、还原大小，用户将鼠标指向按钮时，还会有对应的文字提示，如下图所示。</p>
                    <img src={require("../../assets/images/document26.png")} alt="" />
                    <p className="indent-2">其中，保存、打开、组合、拆分组合、还原大小已在前文介绍，不再赘述。</p>
                    <ol style={{ margin: "0 0 1em 2em" }}>
                        <li>撤销、恢复</li>
                        <p>用户可将包括但不限于拖拽节点、连接节点、编辑节点等操作进行撤销或恢复，且次数不设上限，直至没有操作可撤销或恢复。</p>
                        <li>复制</li>
                        <p>用户可以将所选内容(连线除外)进行复制。</p>
                        <li>粘贴</li>
                        <p>用户可以将复制的结果进行粘贴，这将复制出完全相同的一份节点或组合。如下图所示。</p>
                        <img src={require("../../assets/images/document27.png")} style={{ transform: "translateX(-2em)" }} alt="" />
                        <li>删除</li>
                        <p>用户可将所选内容删除，如果是删除节点或组合，还会将连接至此节点或组合的连线也删除。</p>
                        <li>全选</li>
                        <p>用户可以将所有节点全部选择。</p>
                        <li>返回上一级、下一级</li>
                        <p>对于超节点，用户可操作进入超节点或返回上一级。</p>
                        <li>顶端对齐、左对齐、右对齐</li>
                        <p>将所选节点的位置进行向上、向左或向右对齐。</p>
                        <li>上下居中、左右居中</li>
                        <p>将所选节点的位置的横坐标或纵坐标取均值后改变其位置。</p>
                        <li>横向分布、纵向分布</li>
                        <p>将所选节点的位置的横坐标或纵坐标间距保持一致。</p>
                        <li>网格对齐</li>
                        <p>将所选节点的位置对齐到网格</p>
                    </ol>
                    <h4>4.7.2 右键菜单</h4>
                    <p className="indent-2">用户右键点击连线、节点、组合或空白区域均可弹出右键菜单，并且菜单内容为自适应。例如，右键点击单一节点时不会显示拆分组合按钮，只有在点击组合时才显示拆分组合按钮，如下图所示。</p>
                    <img src={require("../../assets/images/document28.png")} style={{ width: "500px" }} alt="" />
                    <p className="indent-2">类似的，用户只有才复制了内容后，右键菜单才会显示粘贴按钮。</p>
                    <h4>4.7.3 其他</h4>
                    <ol style={{ margin: "0 0 1em 2em" }}>
                        <li>文本编辑功能</li>
                        <p>用户选中节点后，再次点击节点名称，即可编辑节点名称，如下图所示。组合和连线的操作方法与此相同，若连线还没有任何文本内容，则右键点击连线，在右键菜单中点击编辑按钮即可。</p>
                        <img src={require("../../assets/images/document29.png")} style={{ transform: "translateX(-2em)", width: "500px" }} alt="" />
                        <li>节点旋转功能</li>
                        <p>用户选中节点后，按住节点上方的蓝色圆钮即可旋转节点。如下图所示。</p>
                        <img src={require("../../assets/images/document30.png")} style={{ transform: "translateX(-2em)", width: "300px" }} alt="" />
                    </ol>
                    <h2>5、案例演示</h2>
                    <p className="indent-2"><b>将“新建项目”、“上传文件”、“处理数据”三个节点从节点列表拖拽到画布上并用单向连线连接。</b></p>
                    <p className="indent-2">其中节点的拖放顺序与连线的生成顺序没有特定要求，只要保证在对每个节点进行操作之前，节点按“新建项目→上传文件”与“上传文件-处理数据”的顺序连接即可。</p>
                    <img src={require("../../assets/images/document31.png")} alt="" />
                    <p className="indent-2"><b>双击“新建项目”节点，弹出对应对话框。</b></p>
                    <img src={require("../../assets/images/document32.png")} alt="" />
                    <p className="indent-2">在对话框中分别填入项目名称（必填）与项目描述（必填），点击预览图上传按钮可以上传项目预览图片（非必填）。</p>
                    <img src={require("../../assets/images/document33.png")} alt="" />
                    <p className="indent-2">点击“确定”按钮，将数据发送到服务器。如果发送成功，会有“新建成功”的消息提示。</p>
                    <img src={require("../../assets/images/document34.png")} style={{ width: "400px" }} alt="" />
                    <p className="indent-2"><b>双击“上传文件”节点，弹出对应对话框。</b></p>
                    <img src={require("../../assets/images/document35.png")} alt="" />
                    <p className="indent-2">点击“文件类型”下拉列表，选择需要上传的文件的类型。</p>
                    <img src={require("../../assets/images/document36.png")} alt="" />
                    <p className="indent-2">点击或拖拽文件至文件上传区域上传文件。</p>
                    <img src={require("../../assets/images/document37.png")} alt="" />
                    <p className="indent-2">点击“完成”按钮，将文件发送到服务器。</p>
                    <p className="indent-2"><b>点击“处理数据”节点，弹出对应对话框。</b></p>
                    <img src={require("../../assets/images/document38.png")} alt="" />
                    <p className="indent-2">点击“处理数据”按钮，将项目名与文件名发送到服务器。</p>
                    <p className="indent-2"><b>在Elem Visualization中的“所有项目”列表中可以查看提交的项目与对应文件。</b></p>
                    <img src={require("../../assets/images/document39.png")} alt="" />
                    <p className="indent-2">点击某一项目，跳转到该项目详情页面。</p>
                    <p className="indent-2">点击左上角图标，选择“打开”，可以查看项目对应的文件列表。</p>
                    <img src={require("../../assets/images/document40.png")} alt="" />
                </div>
            </div>
        )
    }
}