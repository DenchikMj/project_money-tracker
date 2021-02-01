import React, { Component } from "react";
import "../css/category_styles.css";
import food from '../icons/category/food_light.png';
import clothes from '../icons/category/clothes_light.png';
import medicine from '../icons/category/medicine.png';
import rest from '../icons/category/rest_light.png';
import IconList from './IconList';
import { BrowserRouter as Router, Link, NavLink, Route} from "react-router-dom";

const icons = [food, clothes, medicine, rest, food, clothes, medicine, rest, food, clothes, medicine, rest, food, clothes, medicine, rest,]
const color = ['#ff8080', '#ff944d', '#ffdb4d', '#c266ff', '#994d00', '#009900', '#0066cc', '#cc3300', '#558000', '#000066']

class AddCategory extends Component {

    state = {
        id: '',       
        icon: '', 
        color: '',
        name: '',
        description: ''
    }

    getIconURL = (name) => {
        return `../icons/category/${name}.png`;
    }

     updateDataFromStorage = () => {
        let data = JSON.parse(localStorage.getItem('categoryTable'));        
        if(data === null) {data = []};
        return data
    }   

    setInformation = async (e) => {
        e.preventDefault();
        await this.setState({name: e.target.elements.name.value });
        await this.setState({description: e.target.elements.description.value });       
        await this.setState({id: Date.now()})
        await this.setState({icon: e.target.elements.icon.value});
        await this.setState({color: e.target.elements.color.value});                
        let table = this.updateDataFromStorage();              
        table.push(this.state);        
        localStorage.setItem('categoryTable', JSON.stringify(table));        
        e.target.elements.name.value = '';
        e.target.elements.description.value = '';
        this.props.history.push('/categories');       
    };
    

    render() {              
        return (
            <div>
                <form className= 'addCategory' onSubmit={this.setInformation}>
                    <h2>New category</h2> 

                    <div className='categoryName'>
                        <p>name:</p>
                        <input className='inpName' type='text' name='name' />
                    </div>
                    <div className='categoryDescription' >
                        <p>description:</p>
                        <input className='inpDescr' type='text' name='description' />
                    </div>
                    <div className='categoryIcon'>
                        <p>select icon:</p>
                        <div className= 'iconList'>
                            {icons.map((icon,ind) => <div className='iconItem'>                                                            
                                    <input id={'icon'+ind.toString()} className='inpRadio' type="radio" name='icon' value={icon} />
                                    <label htmlFor={'icon'+ind.toString()}><img className='icon' src={icon} alt="icon" /></label>
                                </div> )}                            
                        </div>                         
                    </div>
                    <div className='categoryColor'>
                        <p>select color:</p>
                        <div className= 'colorList'>
                            {color.map((item,ind) => <div className='colorItem'>                                                            
                                    <input id={'color'+ind.toString()} className='inpRadio' type="radio" name='color' value= {item} />
                                    <label htmlFor={'color'+ind.toString()} style={{backgroundColor: item}}></label>
                                </div> )}
                        </div>
                    </div>
                    <button type='submit' className='btnAddNew'>add new category</button>
                </form>
            </div>
        )
    }

}

export default AddCategory;




