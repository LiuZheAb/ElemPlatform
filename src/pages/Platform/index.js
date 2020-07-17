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
                <div className="name">
                    <img src={require("../../assets/images/platform.png")} alt=""/>
                </div>
                <div className="product-block">
                    <div className="product">
                        Elem V
                    </div>
                    <div className="product">
                        Elem D
                    </div>
                </div>
            </div >
        )
    }
}
