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
            show: false
        };

        this.handleChangeMoney = this.handleChangeMoney.bind(this);
        this.handleChangeTypeInc = this.handleChangeTypeInc.bind(this);

        this.sortAZType = this.sortAZType.bind(this);
        this.sortAZMoney = this.sortAZMoney.bind(this);

        this.sortZAType = this.sortZAType.bind(this);
        this.sortZAMoney = this.sortZAMoney.bind(this);

        this.filterHalfThousandLess = this.filterHalfThousandLess.bind(this);
        this.filterHalfThousandMore = this.filterHalfThousandMore.bind(this);
        this.filterThousandMore = this.filterThousandMore.bind(this);

        this.addMoneyToTypeInc = this.addMoneyToTypeInc.bind(this);
        this.showInput = this.showInput.bind(this);

    }

    componentDidMount() {
        this.setState({money: '2500', value: 'Salary Jan.'});
    }

    handleChangeMoney(e) {
        e.target.value = e.target.value.replace(/[^\d,]/g, '');
        this.setState({ money: e.target.value});
    }
    handleChangeTypeInc(e) {
        this.setState({value: e.target.value});
    }
    
    addMoneyToTypeInc = () => {
        const newData = {type: this.state.value, money: `$${this.state.money}`};
        // console.log(this.state.value);
        this.setState({ categories: [...this.state.categories, newData ]});
        // console.log(this.state.categories);
        localStorage.setItem('incomesTable',JSON.stringify( [...this.state.categories, newData ]));
        this.setState({show: false});

    }

    sortAZType = () => {
        let arrAZInc = this.state.categories.sort((a, b) => a.type.localeCompare(b.type));
        this.setState({categories: [...arrAZInc]});
    }
    
    sortAZMoney = () => {
        let arrAZMoneyInc = this.state.categories.sort((a, b) => a.money.localeCompare(b.money));
        this.setState({categories: [...arrAZMoneyInc]});
    }

    sortZAType = () => {
        const arrZAInc = this.state.categories.reverse((a, b) => a.type.localeCompare(b.type));
        this.setState({categories: [...arrZAInc]});
    }
    
    sortZAMoney = () => {
        const arrZAMoneyInc = this.state.categories.reverse((a, b) => a.money.localeCompare(b.money));
        this.setState({categories: [...arrZAMoneyInc]});
    }


    filterHalfThousandLess = () => {
        const filteredByMoneyInc = this.state.categories.filter(item => Number(item.money.slice(1)) <= 500 );
        this.setState({categories: [...filteredByMoneyInc]});
    }
    filterHalfThousandMore = () => {
        const filteredByMoneyInc = this.state.categories.filter(item => Number(item.money.slice(1)) >= 500 );
        this.setState({categories: [...filteredByMoneyInc]});
    }
    filterThousandMore = () => {
        const filteredByMoneyInc = this.state.categories.filter(item => Number(item.money.slice(1)) >= 1000 );
        this.setState({categories: [...filteredByMoneyInc]});
    }

    clear = () => {
        const prevCatInc = JSON.parse(localStorage.getItem('incomesTable'));
        this.setState({categories: prevCatInc})
    }

    showInput = () => {
        this.setState({show: true});
    }

    render() {

        return (
            <div >
                <div>
                    <form name='form' className='addCategory'>
                        <p><button className= 'btnAdd' type="button" onClick={this.showInput}>Edit</button></p>
                        {this.state.show ?
                            <label className='categoryName'>
                                <p><input className='inpName' type="text" placeholder='Enter salary, like: Salary Jan.' onChange={this.handleChangeTypeInc}></input></p>
                                <input className='inpName' type="text" placeholder="Enter money, like: 2500" onChange={this.handleChangeMoney}></input>
                                <p><button className= 'btnAdd' type="button" onClick={this.addMoneyToTypeInc}>Add</button></p>
                            </label>
                        :
                        null
                        }
                    </form>
                </div>
                <table className="Page">
                    <thead>
                        <tr className='pageHeader'>
                            <div className='underlineRow'>
                                <th className='typeHeader'>Type
                                    <div className='dropdown'>
                                        <div className='dropbtn'>▼</div>
                                        <div className="dropdown-content">
                                            <a onClick={this.sortAZType}>Sort A-Z</a>
                                            <a onClick={this.sortZAType}>Sort Z-A</a>
                                            <a onClick={this.clear}>Clear filter</a>
                                        </div>
                                    </div>
                                </th>
                                <th className='moneyHeaderInc'>Money
                                <div className='dropdown'>
                                    <div className='dropbtn'>▼</div>
                                        <div className="dropdown-content">
                                            <a onClick={this.sortAZMoney}>Sort A-Z</a>
                                            <a onClick={this.sortZAMoney}>Sort Z-A</a>
                                            <a onClick={this.filterHalfThousandLess}>Filter by less than 500 </a>
                                            <a onClick={this.filterHalfThousandMore}>Filter by more than 500 </a>
                                            <a onClick={this.filterThousandMore}>Filter by more than 1000 </a>
                                            <a onClick={this.clear}>Clear filter</a>
                                        </div>
                                    </div>
                                </th>
                            </div>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.categories?.map((row, index) => {
                            return (
                                <tr className='Row'>
                                    <td>
                                        <div className='type'>{this.state?.categories[index]?.type}</div>
                                    </td>
                                    <td>
                                        <div className='moneyInc'>{this.state?.categories[index]?.money}</div>
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