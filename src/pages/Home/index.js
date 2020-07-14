import React, {
    Component,
    // lazy 
} from 'react';
import { Route } from "react-router-dom";

// const App = lazy(() => import('../../components/App'));

export default class index extends Component {
    render() {
        return (
            <div>
                <Route exact path="/"><div>home</div> </Route>
            </div >
        )
    }
}
