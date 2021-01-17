import React, { Component } from "react";
import "../css/category_styles.css";
import Category from './Category.js';
import CategoruPageHeader from './CategoryPageHeader';
import CategoryTableTitle from './CategoryTableTitle';

import AddCategory from './AddCategory';


class ShowCategoryPage extends Component {

    state = {
        categories: []
    }


    createIdGenerator = function () {
        let count = 1;
        return function () {
            return count++
        }
    }

    addDataCategory = data => {
        this.setState({ categories: this.state.categories.concat(data) });
        /*console.log(this.state.categories)*/
    }

    render() {

        return (
            <div className="Page">
                <CategoruPageHeader />
                <CategoryTableTitle />
                <div className='catTable'>
                    {this.state.categories.map((category, id) => <Category cat={category} key={category.id} />)}
                </div>
                <AddCategory getID={this.createIdGenerator()} addData={this.addDataCategory} />
            </div>
        );
    }
}

export default ShowCategoryPage;