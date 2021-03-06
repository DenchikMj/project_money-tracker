import React, { Component } from 'react';
import Charts from './Charts';
import ShowCategoryPage from './ShowCategoryPage';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
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
        test: 1,
    }

    getUserObjFromLocalStorage = () => {
        let data = JSON.parse(localStorage.getItem('Users'));
        return data !== null ? data : {};
    }


    render() {
        return (
            <div className="main">
                <Router>
                    <div className="top-menu">
                        <div className="menu-item">
                            <NavLink className="link-pot-menu" to="/">Home</NavLink>
                        </div>
                        <div className="menu-item">
                            <NavLink className="link-pot-menu" to="/charts">Charts</NavLink>
                        </div>
                        <div className="menu-item">
                            <NavLink className="link-pot-menu" to="/categories">Categories</NavLink>
                        </div>
                        <div className="menu-item">
                            <NavLink className="link-pot-menu" to="/settings">Settings</NavLink>
                        </div>
                    </div>
                    <div className="Balans">
                        <Balans user={this.getUserObjFromLocalStorage()} balans='0.00' />
                    </div>
                    <Switch>
                        <Route path="/charts">
                            <Charts />
                        </Route>
                        <Route path="/categories" exact component={ShowCategoryPage} />
                           
                        <Route path="/categories/AddCategory" exact component={AddCategory} />
                        <Route path="/categories/EditCategory/:id" exact component={EditCategory} />
                            
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route exact path="/">
                            <TabSwich />
                        </Route>
                    </Switch>
                </Router>
            </div >
        )
    }

}

export default Main;
                         