
import React, { Component } from 'react';
import '../css/style-project.css';

// const categories = [{
//     category: 'Food',
//     description: 'Dinner with John',
//     date: '26/12/2019',
//     money: '$13.00'
//   },
//   {
//     category: 'Clothes',
//     description: '',
//     date: '23/12/2019',
//     money: '$26.10'
//   }
// ];


class TableWiev extends Component {


    constructor(props) {
        super(props);
        this.state = {
            categories: props.data,
            category: '',
            //desc: '',
            //date: '',
            // money: ''
        };

        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        // this.handleChangeDescription = this.handleChangeDescription.bind(this);
        // this.handleChangeDate = this.handleChangeDate.bind(this);
        // this.handleChangeMoney = this.handleChangeMoney.bind(this);

        this.addCategory = this.addCategory.bind(this);
    }

    // state = {
    //     categories: categories,
    //     value: ''
    //   };

    handleChangeCategory(e) {
        this.setState({ category: e.target.value });
    }
    // handleChangeDescription(e){
    //     this.setState({desc: e.target.value});
    // }
    // handleChangeDate(e){
    //     this.setState({date: e.target.value});
    // }
    // handleChangeMoney(e){
    //     this.setState({money: e.target.value});
    // }

    addCategory = () => {
        this.setState({ categories: [...this.state.categories, { category: this.state.category }] });
    }
    // addDescription = () => {
    //     this.setState({categories: [...this.state.categories, {description: this.state.desc}]});
    // }
    // addDate = () => {
    //     this.setState({categories: [...this.state.categories, {date: this.state.date}]});
    // }
    // addMoney = () => {
    //     this.setState({categories: [...this.state.categories, {money: this.state.money}]});
    // }


    render() {

        return (
            <div>
                <div>
                    <form>
                        <p>
                            <label>{this.props.typeWiev}
                                <input type="text" value={this.state.category} onChange={this.handleChangeCategory}></input>
                            </label>
                            <button type="button" onClick={this.addCategory}>Add</button>
                        </p>
                        {/* <p>
                    <label>Description
                        <input type="text" value={this.state.desc} onChange={this.handleChangeDescription}></input>
                    </label>
                    <button type="button" onClick={this.addDescription}>Add</button>
                </p>
                <p>
                    <label>Category
                        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <button type="button" onClick={this.addItem}>Add</button>
                </p>
                <p>
                    <label>Category
                        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <button type="button" onClick={this.addItem}>Add</button>
                </p> */}
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
                                        <div className='category'>{this.state.categories[index].category}</div>
                                    </td>
                                    <td>
                                        <div className='description'>{this.state.categories[index].description}</div>
                                    </td>
                                    <td>
                                        <div className='date'>{this.state.categories[index].date}</div>
                                    </td>
                                    <td>
                                        <div className='money'>{this.state.categories[index].money}</div>
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