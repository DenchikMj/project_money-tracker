import React, { Component } from 'react';
import Charts from './Charts';
import ShowCategoryPage from './ShowCategoryPage';
import Settings from './Settings';
import TabSwich from './TabSwich';
import Balans from './Balans';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import '../css/main.css';

class Main extends Component {

    state = {
        test: 1
    }

    render() {
        return (
            <div className="main">
                <Router>
                    <div className="menu">
                        <div className="menu-item">
                            <NavLink to="/">Home</NavLink>
                        </div>
                        <div className="menu-item">
                            <NavLink to="/charts">Charts</NavLink>
                        </div>
                        <div className="menu-item">
                            <NavLink to="/categories">Categories</NavLink>
                        </div>
                        <div className="menu-item">
                            <NavLink to="/settings">Settings</NavLink>
                        </div>
                    </div>
                    <div className="Balans">
                        <Balans />
                    </div>
                    <Switch>
                        <Route path="/charts">
                            <Charts />
                        </Route>
                        <Route path="/categories">
                            <ShowCategoryPage />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route exact path="/">
                            <TabSwich />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Main;