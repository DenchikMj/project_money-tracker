import React from 'react';
import SelectionEl from './SelectionEl';
import TableWiev from './TableWiev';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

const categories = [{
    category: 'Food',
    description: 'Dinner with John',
    date: '26/12/2019',
    money: '$13.00'
},
{
    category: 'Clothes',
    description: '',
    date: '23/12/2019',
    money: '$26.10'
}
];

function TabSwich() {
    return (
        <div>
            <Router>
                <div className="tabbar">
                    <div className="tabbar-item">
                        <NavLink to="/">Charges</NavLink>
                    </div>
                    <div className="tabbar-item">
                        <NavLink to="/incomes">Incomes</NavLink>
                    </div>
                </div>
                <SelectionEl />
                <Switch>
                    <Route exact path="/">
                        <div>
                            <h2>Charges</h2>
                        </div>
                        <TableWiev data={categories} typeWiev="Charges" />
                    </Route>
                    <Route path="/incomes">
                        <div>
                            <h2>Incomes</h2>
                        </div>
                        <TableWiev data={categories} typeWiev="Incomes" />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default TabSwich;