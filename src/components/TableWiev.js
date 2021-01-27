import React, { Component } from 'react';
import '../css/style-project.css';

class TableWiev extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: props.data,
            money: '',
            value: '',
        };

        this.handleChangeMoney = this.handleChangeMoney.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.addMoneyToCategory = this.addMoneyToCategory.bind(this);
    }

    componentDidMount() {
        this.setState({value: this.state.categories[0].id, money: '0'});
    }

    handleChangeMoney(e) {
        this.setState({ money: e.target.value});
    }
    handleChangeSelect(e) {
        this.setState({value: Number(e.target.value)});
    }
    
    addMoneyToCategory = () => {
        let currentValue = this.state.categories.find(el => el.id === this.state.value);
        const filteredCat = this.state.categories.filter(item => item.id !== this.state.value)
        const newData = {...currentValue, money: `$${this.state.money}`};
        this.setState({ categories: [...filteredCat, newData ]});
    }

    render() {

        return (
            <div>
                <div>
                    <form name='form'>
                        <p>
                            <label>{this.props.typeWiev}
                                <input type="text" onChange={this.handleChangeMoney}></input>
                                <select value={this.state.value} onChange={(e) => this.handleChangeSelect(e)}>{this.state.categories.map((item) => 
                                <option key={item.id} value={item.id}>{item.category}</option>)}</select>
                            </label>
                            <button type="button" onClick={this.addMoneyToCategory}>Add</button>
                        </p>
                    </form>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Money</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.categories.map((row, index) => {
                            return (
                                <tr>
                                    <td>
                                        <div className='category'>{this.state?.categories[index]?.category}</div>
                                    </td>
                                    <td>
                                        <div className='description'>{this.state?.categories[index]?.description}</div>
                                    </td>
                                    <td>
                                        <div className='date'>{this.state?.categories[index]?.date}</div>
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

export default TableWiev;