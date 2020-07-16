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
            </div >
        )
    }
}
