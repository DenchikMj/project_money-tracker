import React from 'react';
import SelectionEl from './SelectionEl';
import TableWiev from './TableWiev';
import TableWievIncomes from './TabWievIncomes';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

const categories = [{
    id: 1,
    category: 'Food',
    description: 'Dinner with John',
    date: '26/12/2019',
    // money: ''
},
{
    id: 2,
    category: 'Clothes',
    description: '',
    date: '23/12/2019',
    money: ''
}
];

const testIncome = [{
    type: 'Salary',
    money: '$2000'
}]

function TabSwich() {
    return (
        <div>
            <Router>
                <div className="tabbar">
                    <div className="tabbar-item">
                        <NavLink to="/">Charges</NavLink>
                    </div>
                    <div className="tabbar-item">
                        <NavLink to="/incomes" >Incomes</NavLink>
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
                    <Route exact path="/incomes">
                        <div>
                            <h2>Incomes</h2>
                        </div>
                        <TableWievIncomes data={testIncome} typeWiev="Incomes" />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default TabSwich;