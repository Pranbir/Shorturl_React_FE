import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import screens from "./screens/index"
import 'bootstrap/dist/css/bootstrap.min.css';

class navigation extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path={"/"} component={screens.home} />
                </Switch>
            </HashRouter>
        );
    }
}

export default navigation;
