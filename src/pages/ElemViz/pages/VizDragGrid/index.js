/*
 *文件名 : index.js
 *作者 : 刘哲
 *创建时间 : 2020/8/24
 *文件描述 : 可视化产品组件拖拽页面
 */

import React, { useState, useCallback, useEffect } from 'react';
import Target from './Target';
import Item from './Item';
import ItemTypes from './ItemTypes';
import update from 'immutability-helper';
import GridLayout from 'react-grid-layout';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { Link } from "react-router-dom";
import "./index.less";
import "react-grid-layout/css/styles.css";

const Container = () => {
    const [size, setSize] = useState({
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight
    });
    //修改屏幕大小时调用
    let handleResize = useCallback((e) => {
        setSize({
            clientWidth: document.documentElement.clientWidth,
            clientHeight: document.documentElement.clientHeight,
        })
    }, [])
    //获取屏幕大小并将Target填满视区
    let columnNum = ((size.clientWidth - 240) / 400).toFixed();
    let rowNum = (size.clientHeight / 300).toFixed();
    let targetHeight = size.clientHeight / rowNum;
    let targetArray = [];
    for (let i = 0; i < columnNum * rowNum * 4; i++) {
        targetArray.push({ accepts: [ItemTypes.VTK, ItemTypes.ECHARTS], lastDroppedItem: null })
    }
    const [targets, setTargets] = useState(targetArray);
    const [items, setItems] = useState();

    useEffect(() => {
        // 屏幕大小监听器
        window.addEventListener('resize', handleResize);
        // axios.get(baseUrl + "/vtkFile", {
        //     params: {
        //         projectName: localStorage.getItem("projectName") ? localStorage.getItem("projectName") : "test"
        //     }
        // }).then(function (response) {
        //     let itemArray = []
        //     for (let i = 0; i < response.data.data.length; i++) {
        //         itemArray.push({ name: response.data.data[i], type: ItemTypes.VTK })
        //     }
        //     for (let i = 0; i < 4; i++) {
        //         itemArray.push({ name: `echarts${i}`, type: ItemTypes.ECHARTS })
        //     }
        //     setItems(itemArray);
        // }).catch(function (error) {
        // });
        let vtkData = ['dem.csv', 'sgy2d.csv', 'Fmesh.vtk', 'Fmesh1.vtk', 'mesh.flavia.msh', 'mesh1.flavia.msh', 'P90.msh', 'w42vtk.post.msh', 'AMG_F1_W10.msh'];
        let itemArray = []
        for (let i = 0; i < vtkData.length; i++) {
            itemArray.push({ name: vtkData[i], type: ItemTypes.VTK })
        }
        for (let i = 0; i < 4; i++) {
            itemArray.push({ name: `echarts${i}`, type: ItemTypes.ECHARTS })
        }
        setItems(itemArray);
    }, [handleResize])

    const [droppedItem, setDroppedBoxNames] = useState([]);

    function isDropped(item) {
        return droppedItem.indexOf(item) > -1
    }

    const handleDrop = useCallback(
        (index, item) => {
            const { name } = item
            setDroppedBoxNames(
                update(droppedItem, name ? { $push: [name] } : { $push: [] }),
            )
            setTargets(
                update(targets, {
                    [index]: {
                        lastDroppedItem: {
                            $set: item,
                        },
                    },
                }),
            )
        },
        [droppedItem, targets],
    )
    // const saveHtml = () => {
    //     let html = ""
    //     if (document.getElementsByClassName("target")[0]) {
    //         html = document.getElementsByClassName("target")[0].innerHTML
    //     }
    //     var elementA = document.createElement('a');
    //     elementA.download = +new Date() + ".txt";//文件名
    //     //隐藏dom点不显示
    //     elementA.style.display = 'none';
    //     var blob = new Blob([html]);//二进制
    //     elementA.href = URL.createObjectURL(blob);
    //     document.body.appendChild(elementA);
    //     elementA.click();
    //     document.body.removeChild(elementA);
    // }
    // const importHtml = (e) => {
    //     if (e.target.value) {
    //         //读取json
    //         let file = document.getElementById('file').files[0];
    //         const reader = new FileReader();
    //         //外层作用域的重新定义
    //         reader.readAsText(file);
    //         reader.onload = function () {
    //             document.getElementsByClassName("target")[0].innerHTML = reader.result;
    //         };
    //     };
    // }
    return (
        <DndProvider backend={Backend}>
            <div className="container">
                <div className="source">
                    {/* <button onClick={saveHtml}>save</button>
                    <input id="file" type="file" accept=".txt" onChange={importHtml} /> */}
                    <Link to="/viz/vizlist"><div className="back-btn">返 回</div></Link>
                    {items ? items.map(({ name, type }, index) => (
                        <Item
                            name={name}
                            type={type}
                            isDropped={isDropped(name)}
                            key={index}
                        />
                    )) : null}
                </div>
                <div className="target">
                    <GridLayout cols={Number(columnNum * 2)} rowHeight={(targetHeight / 2)} width={size.clientWidth - 240} margin={[0, 0]}>
                        {targets.map(({ accepts, lastDroppedItem }, index) => (
                            <div key={index} data-grid={{ x: index % columnNum * 2, y: parseInt(index / columnNum * 2), w: 2, h: 2 }}>
                                <Target
                                    accept={accepts}
                                    lastDroppedItem={lastDroppedItem}
                                    onDrop={(item) => { handleDrop(index, item) }}
                                    key={index}
                                    targetWidth={"100%"}
                                    targetHeight={"100%"}
                                />
                            </div>
                        ))}
                    </GridLayout>
                </div>
            </div>
        </DndProvider>
    )
}

export default Container