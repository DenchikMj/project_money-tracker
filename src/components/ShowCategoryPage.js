import React, { Component } from "react";
import "../css/category_styles.css";
import Category from './Category.js';
import CategoruPageHeader from './CategoryPageHeader';
import CategoryTableTitle from './CategoryTableTitle';
import AddCategory from './AddCategory';


class ShowCategoryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {categories: this.updateDataFromStorage()}
    }
   

    updateLocalStorage = () => {
        const local=window.localStorage;
        const table = JSON.stringify (this.state.categories);
        localStorage.setItem('categoryTable', table);
        console.log(local); 
    }

    updateDataFromStorage = () => {
        let data = JSON.parse(localStorage.getItem('categoryTable'));
        if(data === null) {data = []}
        return data
    }

    addDataCategory = data => {
        this.setState({ categories: this.state.categories.concat(data) });
        this.updateLocalStorage();
    }

    render() {
      
        return (
            <div className="Page">
                <CategoruPageHeader />
                <CategoryTableTitle />
                <div className='catTable'>
                    {this.state.categories.map((category, id) => <Category cat={category} key={category.id} />)}
                </div>
                <AddCategory addData={this.addDataCategory} />
            </div>
        );
    }
}

export default ShowCategoryPage;

