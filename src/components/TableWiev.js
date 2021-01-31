import React, { Component } from 'react';
import moment from 'moment';
// import '../css/style-project.css';
import "../css/category_styles.css";


class TableWiev extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: props.data,
            money: '',
            description: '',
            date: '',
            value: '',
            show: false
        };

        this.handleChangeMoney = this.handleChangeMoney.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.sortAZCat = this.sortAZCat.bind(this);
        this.sortAZDesc = this.sortAZDesc.bind(this);
        this.sortAZMoney = this.sortAZMoney.bind(this);

        this.sortZACat = this.sortZACat.bind(this);
        this.sortZADesc = this.sortZADesc.bind(this);
        this.sortZAMoney = this.sortZAMoney.bind(this);

        this.filterByCat = this.filterByCat.bind(this);
        this.filterByDesc = this.filterByDesc.bind(this);
        this.filterDate = this.filterDate.bind(this);
        this.filterDateDay = this.filterDateDay.bind(this);
        this.filterDateWeek = this.filterDateWeek.bind(this);
        this.filterDateMonth = this.filterDateMonth.bind(this);
        this.filterDateYear = this.filterDateYear.bind(this);
        
        this.filterHalfThousandLess = this.filterHalfThousandLess.bind(this);
        this.filterHalfThousandMore = this.filterHalfThousandMore.bind(this);
        this.filterThousandMore = this.filterThousandMore.bind(this);

        this.clear = this.clear.bind(this);
        this.addInfoToCategory = this.addInfoToCategory.bind(this);
        this.showInput = this.showInput.bind(this);
    }

    componentDidMount() {
        this.setState({ value: this.state.categories[0].id, money: '0', description: '', date: new Date().toLocaleDateString()});
    }

    handleChangeMoney(e) {
        e.preventDefault();
        e.target.value = e.target.value.replace(/[^\d,]/g, '');
        this.setState({ money: e.target.value });
        // this.setState(this.state.categories.money= '')
    }

    handleChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    handleChangeDate(e) {
        this.setState({ date: e.target.value });
        // console.log(this.state.date);
    }

    handleChangeSelect(e) {
        this.setState({ value: Number(e.target.value) });
    }

    addInfoToCategory = () => {
        let currentValue = this.state.categories.find(el => el.id === this.state.value);
        let filteredCat = this.state.categories.filter(item => item.id !== this.state.value);
        const newData = {...currentValue, money: `$${this.state.money}`, description: this.state.description, date: this.state.date};
        this.setState({ categories: [...filteredCat, newData ]});
        // console.log(this.state.categories)
        // console.log(this.state);
        localStorage.setItem('categoryTable',JSON.stringify( [...filteredCat, newData ]));
        this.setState({show: false});
    }

    sortAZCat = () => {
        let arrAZ = this.state.categories.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({categories: [...arrAZ]});
    }
    sortAZDesc = () => {
        let arrAZDesc = this.state.categories.sort((a, b) => a.description.localeCompare(b.description));
        this.setState({categories: [...arrAZDesc]});
    }
    sortAZMoney = () => {
        let arrAZMoney = this.state.categories.sort((a, b) => a.money.localeCompare(b.money));
        this.setState({categories: [...arrAZMoney]});
    }

    sortZACat = () => {
        const arrZA = this.state.categories.reverse((a, b) => a.name.localeCompare(b.name));
        this.setState({categories: [...arrZA]});
    }
    sortZADesc = () => {
        const arrZADesc = this.state.categories.reverse((a, b) => a.description.localeCompare(b.description));
        this.setState({categories: [...arrZADesc]});
    }
    sortZAMoney = () => {
        const arrZAMoney = this.state.categories.reverse((a, b) => a.money.localeCompare(b.money));
        this.setState({categories: [...arrZAMoney]});
    }

    filterByCat = () => {
        const filteredByCategory = this.state.categories.filter(item => item.id === this.state.value);
        this.setState({categories: [...filteredByCategory]});
    }
    filterByDesc = () => {
        const filteredByDesc = this.state.categories.filter(item => item.description === this.state.description);
        this.setState({categories: [...filteredByDesc]});
    }
    filterDate = () => {
        const filterByDate = this.state.categories.sort((a, b) => moment(b.date, 'YYYY-MM-DD') - moment(a.date, 'YYYY-MM-DD'));
        this.setState({categories: [...filterByDate]});
    }
    filterDateDay = () => {
        const thisDay = moment();
        const filteredCurrentDay = this.state.categories.filter(item => moment(item.date).isBetween(moment(), thisDay, 'day','[]'));
        this.setState({categories: [...filteredCurrentDay]});
    }
    filterDateWeek = () => {
        const today = moment();
        const sevenDaysBefore = moment().subtract(7, 'days');
        const filterDateByWeek = this.state.categories.filter(item => moment(item.date).isBetween(sevenDaysBefore, today, 'day', '[]'));
        this.setState({categories: [...filterDateByWeek]});
    }
    filterDateMonth = () => {
        let currentMonth = moment();
        let currentMonthBegin = moment().subtract(1, 'months' );
        let filteredMonth = this.state.categories.filter(item => moment(item.date).isBetween(currentMonthBegin, currentMonth, 'day', '[]'));
        this.setState({categories: [...filteredMonth]});
    }
    filterDateYear = () => {
        let currentYear = moment();
        let yearBefore = moment().subtract(1, 'years');
        let filteredYear = this.state.categories.filter(item => moment(item.date).isBetween(yearBefore, currentYear,'day', '[]'));
        this.setState({categories: [...filteredYear]});
    }
    filterHalfThousandLess = () => {
        const filteredByMoney = this.state.categories.filter(item => Number(item.money.slice(1)) <= 500 );
        this.setState({categories: [...filteredByMoney]});
    }
    filterHalfThousandMore = () => {
        const filteredByMoney = this.state.categories.filter(item => Number(item.money.slice(1)) >= 500 );
        this.setState({categories: [...filteredByMoney]});
    }
    filterThousandMore = () => {
        const filteredByMoney = this.state.categories.filter(item => Number(item.money.slice(1)) >= 1000 );
        this.setState({categories: [...filteredByMoney]});
    }

    clear = () => {
        const prevCat = JSON.parse(localStorage.getItem('categoryTable'));
        this.setState({categories: prevCat})
    }

    showInput = () => {
        this.setState({show: true});
    }

    render() {

        return (
            <div>
                <div>
                    <form name='form' className='addCategory'>
                        <p>

                            <button className= 'btnAddDesc' type="button" onClick={this.showInput}>Edit</button>
                            {this.state.show ? 
                            <label className='categoryName'>
                                <p><input className='inpName' type="text" placeholder='Enter money value' onChange={this.handleChangeMoney}></input></p>
                                <p><input className='inpName' type="text" placeholder='Enter description' onChange={this.handleChangeDescription}></input></p>
                                <p><input className='inpName' type="date" placeholder='Choose date' value={this.state.date} onChange={this.handleChangeDate}></input></p>
                                <p><select className='select' value={this.state.value} onChange={(e) => this.handleChangeSelect(e)}>{this.state.categories.map((item) => 
                                <option key={item.id} value={item.id}>{item.name}</option>)}</select></p>
                                <button className= 'btnAddDesc' type="button" onClick={this.addInfoToCategory}>Add</button>
                            </label>
                            :
                            null
                            }
                        </p>
                    </form>
                </div>
                <table className="Page">
                    <thead>
                        <tr className='pageHeader'>
                            <div className='underlineRow'>
                            <th className='catHeader'>Category
                                <div className='dropdown'>
                                    <div className='dropbtn'>▼</div>
                                    <div className="dropdown-content">
                                        <a onClick={this.sortAZCat}>Sort A-Z</a>
                                        <a onClick={this.sortZACat}>Sort Z-A</a>
                                        <a onClick={this.filterByCat}>Filter by current category</a>
                                        <a onClick={this.clear}>Clear filter</a>
                                    </div>
                                </div>
                            </th>
                            <th className='descHeader'>Description
                                <div className='dropdown'>
                                    <div className='dropbtn'>▼</div>
                                    <div className="dropdown-content">
                                        <a onClick={this.sortAZDesc}>Sort A-Z</a>
                                        <a onClick={this.sortZADesc}>Sort Z-A</a>
                                        <a onClick={this.filterByDesc}>Filter by current description</a>
                                        <a onClick={this.clear}>Clear filter</a>
                                    </div>
                                </div>
                            </th>
                            <th className='dateHeader'>Date
                            <div className='dropdown'>
                                    <div className='dropbtn'>▼</div>
                                    <div className="dropdown-content">
                                        <a onClick={this.filterDate}>Recent</a>
                                        <a onClick={this.filterDateDay}>This day</a>
                                        <a onClick={this.filterDateWeek}>This week</a>
                                        <a onClick={this.filterDateMonth}>This month</a>
                                        <a onClick={this.filterDateYear}>This year</a>
                                        <a onClick={this.clear}>Clear filter</a>
                                    </div>
                                </div>
                            </th>
                            <th className='moneyHeader'>Money
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
                    <tbody className=''>
                        {this.state.categories.map((row, index) => {
                            return (
                                <tr className='Row'>
                                    <td>
                                        <div className='cat'>{this.state?.categories[index]?.name}</div>
                                    </td>
                                    <td>
                                        <div className='desc'>{this.state?.categories[index]?.description}</div>
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