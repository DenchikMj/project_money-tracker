import React, { Component } from "react";
import "../css/category_styles.css";
import ic from '../icons/category/food_light.png';
import menu from '../icons/menu.png';

class Category extends Component {

    /*state = {
        id: '',
        type: '',
        icon: ic, //url
        iconColor: '',
        name: '',
        description: ''
    }*/



    render() {
        console.log(this.props);
        return (
            <div className='categoryRow'>
                <div className='category'>
                    <img className='icon' src={ic} alt='icon' />
                    <div className='name'>
                        <p>{this.props.cat.name}</p>
                    </div>
                </div>
                <div className='description'>
                    <p>{this.props.cat.description}</p>
                </div>
                <div className='action'>
                    <button type='button' className='btnAction'>
                        <img className='menu' src={menu} alt='menu' />
                    </button>
                </div>
            </div>
        )
    }

}

export default Category
