import React, { Component } from "react";
import "../css/category_styles.css"

class CategoryPageHeader extends Component {

    render() {
        return (
            <div className='pageHeader'>
                <h1 className='pageTitle'>categories</h1>
                <button className='btnAdd'>add more</button>
            </div>
        )
    }
}

export default CategoryPageHeader;