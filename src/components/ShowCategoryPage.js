import React, { Component } from "react";
import "../css/category_styles.css";
import Category from './Category.js';
import AddCategory from './AddCategory';
import { BrowserRouter as Router, Link, NavLink, Route } from "react-router-dom";


class ShowCategoryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {categories: this.updateDataFromStorage()}
    }
   

    updateLocalStorage = () => {
        const local=window.localStorage;
        const table = JSON.stringify (this.state.categories);
        localStorage.setItem('categoryTable', table);
        
    }

    updateDataFromStorage = () => {
        let data = JSON.parse(localStorage.getItem('categoryTable'));
        if(data === null) {data = []}
        return data
    }   

    render() {      
        return (            
            <div className="Page">                
                <div className='pageHeader'>
                    <h1 className='pageTitle'>categories</h1>                
                    <Link className= 'btnAdd' to='/categories/AddCategory'>
                            add category
                     </Link>
                </div>                
                <div className='titleRow'>
                    <div className='categoryTitle'>category</div>
                    <div className='descriptionTitle'>description</div>
                    <div className='actionTitle'>action</div>
                </div>
                <div className='catTable'>
                    {this.state.categories.map((category, id) => <Category cat={category} key={category.id} />)}
                </div>                
            </div>
        );
    }
}

export default ShowCategoryPage;

