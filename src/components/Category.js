import { BrowserRouter as Router, Link} from "react-router-dom";
import React, { Component } from "react";
import "../css/category_styles.css";
import ic from '../icons/category/food_light.png';
import menu from '../icons/menu.png';
import edit from '../icons/pencil.png';
import del from '../icons/delete.png';

class Category extends Component {




    render() {        
        const style={backgroundColor: this.props.cat.color}
        const ID = this.props.cat.id;
        
        return (
            <div className='categoryRow'>
                <div className='category'>                   
                    <img className='iconImg' src={this.props.cat.icon} alt='icon' style={style} />
                    <div className='name'>
                        <p>{this.props.cat.name}</p>
                    </div>
                </div>
                <div className='description'>
                    <p>{this.props.cat.description}</p>
                </div>
                <div className='action'>
                    <Link to={`/categories/EditCategory/${this.props.cat.id}`} className='btnAction' >
                        <img className='act' src={edit} alt='edit' />
                    </Link>
                    <button id={this.props.cat.id} type='button' className='btnAction'>
                        <img className='act' src={del} alt='del' />
                    </button>
                </div>
            </div>
        )
    }

}

export default Category

