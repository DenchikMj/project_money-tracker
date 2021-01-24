import React, { Component } from "react";
import "../css/category_styles.css"
import { BrowserRouter as Router, Link} from "react-router-dom";

class CategoryPageHeader extends Component {

    render() {
        return (
            <div className='pageHeader'>
                <h1 className='pageTitle'>categories</h1>                
                <Link className= 'btnAdd' to='/categories/AddCategory'>
                        add new category
                 </Link>
            </div>
        )
    }
}

export default CategoryPageHeader;


// <button className='btnAdd'>add more</button>