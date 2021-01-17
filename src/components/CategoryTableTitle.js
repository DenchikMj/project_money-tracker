import React, { Component } from "react";
import "../css/category_styles.css"

class CategoryTableTitle extends Component {
    render() {
        return (
            <div className='titleRow'>
                <div className='categoryTitle'>category</div>
                <div className='descriptionTitle'>description</div>
                <div className='actionTitle'>action</div>
            </div>
        )
    }
}

export default CategoryTableTitle;