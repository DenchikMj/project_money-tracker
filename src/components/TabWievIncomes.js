import React, { Component } from 'react';
import '../css/style-project.css';
// import "../css/category_styles.css";

class TableWievIncomes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: props.data,
            money: '',
            value: '',
        };

        this.handleChangeMoney = this.handleChangeMoney.bind(this);
        this.handleChangeTypeInc = this.handleChangeTypeInc.bind(this);
        this.addMoneyToTypeInc = this.addMoneyToTypeInc.bind(this);
    }

    componentDidMount() {
        this.setState({money: '2500', value: 'Salary Jan.'});
    }

    handleChangeMoney(e) {
        this.setState({ money: e.target.value});
    }
    handleChangeTypeInc(e) {
        this.setState({value: e.target.value});
    }
    
    addMoneyToTypeInc = () => {
        const newData = {type: this.state.value, money: `$${this.state.money}`};
        console.log(this.state.value);
        this.setState({ categories: [...this.state.categories, newData ]});
    }

    render() {

        return (
            <div className='Page'>
                <div>
                    <form name='form'>
                        <p>
                            <label className='pageTitle'>{this.props.typeWiev}
                                <input type="text" placeholder='Enter salary, like: Salary Jan.' onChange={this.handleChangeTypeInc}></input>
                                <input type="text" placeholder="Enter money, like: 2500" onChange={this.handleChangeMoney}></input>
                            </label>
                            <button className= 'btnAdd' type="button" onClick={this.addMoneyToTypeInc}>Add</button>
                        </p>
                    </form>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Money</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.categories.map((row, index) => {
                            return (
                                <tr>
                                    <td>
                                        <div className='type'>{this.state?.categories[index]?.type}</div>
                                    </td>
                                    <td>
                                        <div className='money'>{this.state?.categories[index]?.money}</div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableWievIncomes;