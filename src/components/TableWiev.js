import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
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
        };

        this.handleChangeMoney = this.handleChangeMoney.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.sortAZ = this.sortAZ.bind(this);
        this.sortZA = this.sortZA.bind(this);
        this.filterByCat = this.filterByCat.bind(this);
        this.clear = this.clear.bind(this);
        this.addInfoToCategory = this.addInfoToCategory.bind(this);

    }

    componentDidMount() {
        this.setState({ value: this.state.categories[0].id, money: '0', description: '', date: new Date().toLocaleDateString()});
    }

    handleChangeMoney(e) {
        e.target.value = e.target.value.replace(/[^\d,]/g, '');
        this.setState({ money: e.target.value });
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

    // updateDataFromStorage = () => {
    //     let data = JSON.parse(localStorage.getItem('categoryTable'));        
    //     if(data === null) {data = []};
    //     return data
    // } 
    
    addInfoToCategory = () => {
        let currentValue = this.state.categories.find(el => el.id === this.state.value);
        const filteredCat = this.state.categories.filter(item => item.id !== this.state.value);
        const newData = {...currentValue, money: `$${this.state.money}`, description: this.state.description, date: this.state.date};
        this.setState({ categories: [...filteredCat, newData ]});
        console.log(this.state.categories)
        console.log(this.state);
        localStorage.setItem('categoryTable',JSON.stringify( [...filteredCat, newData ]));
    }

    sortAZ = (param) => {
        
        if(param === this.state.categories.name) {
            let arrAZ = this.state.categories.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({categories: [...arrAZ]});

        } else if(param === this.state.categories.money) {
           let arrAZMoney = this.state.categories.sort((a, b) => a.money.localeCompare(b.money));
        this.setState({categories: [...arrAZMoney]});

        }
    }
    sortZA = () => {
        const arrZA = this.state.categories.reverse((a, b) => a.name.localeCompare(b.name));
        this.setState({categories: [...arrZA]});
    }
    filterByCat = () => {
        const filteredByCategory = this.state.categories.filter(item => item.id === this.state.value);
        this.setState({categories: [...filteredByCategory]});
    }
    clear = () => {
        const prevCat = JSON.parse(localStorage.getItem('categoryTable'));
        this.setState({categories: prevCat})
    }

    render() {

        return (
            <div>
                <div>
                    <form name='form' className='addCategory'>
                        <p>
                            <label className='categoryName'>{this.props.typeWiev}
                                <p><input className='inpName' type="text" pattern="[0-9]*" placeholder='Enter money value' onChange={this.handleChangeMoney}></input></p>
                                <p><input className='inpName' type="text" placeholder='Enter description' onChange={this.handleChangeDescription}></input></p>
                                <p><input className='inpName' type="date" placeholder='Choose date' value={this.state.date} onChange={this.handleChangeDate}></input></p>
                                <p><select className='select' value={this.state.value} onChange={(e) => this.handleChangeSelect(e)}>{this.state.categories.map((item) => 
                                <option key={item.id} value={item.id}>{item.name}</option>)}</select></p>
                            </label>
                            <button className= 'btnAddDesc' type="button" onClick={this.addInfoToCategory}>Add</button>
                        </p>
                    </form>
                </div>
                <table className="Page">
                    <thead>
                        <tr className='pageHeader'>
                            <th className=''>Category
                                <DropdownButton title="Dropdown Category">
                                    <p><Dropdown.Item onClick={() => this.sortAZ(this.state.categories.name)} >Sort A-Z</Dropdown.Item></p>
                                    <p><Dropdown.Item onClick={this.sortZA} >Sort Z-A</Dropdown.Item></p>
                                    <p><Dropdown.Item onClick={this.filterByCat}>Filter by current category</Dropdown.Item></p>
                                    <p><Dropdown.Item onClick={this.clear}>Clear filter</Dropdown.Item></p>
                                </DropdownButton>
                            </th>
                            <th>Description
                                <DropdownButton title ="Dropdown Desc">
                                    <p><Dropdown.Item onClick={() => this.sortAZ(this.state.categories.description)} >Sort A-Z</Dropdown.Item></p>
                                    <p><Dropdown.Item onClick={this.sortZA} >Sort Z-A</Dropdown.Item></p>
                                    <p><Dropdown.Item onClick={this.filterByCat}>Filter by current category</Dropdown.Item></p>
                                    <p><Dropdown.Item onClick={this.clear}>Clear filter</Dropdown.Item></p>
                                </DropdownButton>
                            </th>
                            <th>Date</th>
                            <th>Money
                                <DropdownButton title ="Dropdown Desc">
                                    <p><Dropdown.Item onClick={() => this.sortAZ(this.state.categories.money)} >Sort A-Z</Dropdown.Item></p>
                                    <p><Dropdown.Item onClick={this.sortZA} >Sort Z-A</Dropdown.Item></p>
                                    <p><Dropdown.Item onClick={this.filterByCat}>Filter by current category</Dropdown.Item></p>
                                    <p><Dropdown.Item onClick={this.clear}>Clear filter</Dropdown.Item></p>
                                </DropdownButton></th>
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