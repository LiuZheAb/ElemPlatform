import React, {
    Component,
    // lazy 
} from 'react';
import Header from "../../components/Header";
import "./index.less";

// const App = lazy(() => import('../../components/App'));

export default class index extends Component {
    render() {
        return (
            <div id="platform">
                <Header></Header>
                <div className="content">
                    <div className="name">
                        <img src={require("../../assets/images/logo-b.png")} alt="" style={{ width: "106px" }} />
                        <img src={require("../../assets/images/platform.png")} alt="" />
                    </div>
                    <div className="product-block">
                        <div className="product">
                            <div className="animate-box">
                                <img src={require("../../assets/images/block2.png")} alt="" />
                                <img src={require("../../assets/images/block3.png")} alt="" />
                                <img src={require("../../assets/images/block4.png")} alt="" />
                            </div>
                            <img className="product-name" src={require("../../assets/images/elemv.png")} alt="" />
                        </div>
                        <div className="product">
                            <div className="animate-box2">
                                <div className="animate-block" src={require("../../pages/ElemDataFlow/assets/images/block4.png")} alt="" />
                                <div className="animate-block" src={require("../../pages/ElemDataFlow/assets/images/block1.png")} alt="" />
                                <div className="animate-block" src={require("../../pages/ElemDataFlow/assets/images/block3.png")} alt="" />
                                <div className="animate-block" src={require("../../pages/ElemDataFlow/assets/images/block2.png")} alt="" />
                            </div>
                            <img className="product-name" src={require("../../assets/images/elemd.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
