import React, { Component } from "react";
import "../css/category_styles.css";
import ic from '../icons/category/food_light.png';
import clothes from '../icons/category/clothes_light.png';
import medicine from '../icons/category/medicine.png';
import rest from '../icons/category/rest_light.png';
import IconList from './IconList';
import { BrowserRouter as Router, Link, NavLink, Route } from "react-router-dom";


class AddCategory extends Component {

    state = {
        id: '',       
        icon: '', 
        iconColor: '',
        name: '',
        description: ''
    }

    getIconURL = (name) => {
        return `../icons/category/${name}.png`;
    }   

    setInformation = async (e) => {
        e.preventDefault();
        await this.setState({name: e.target.elements.name.value });
        await this.setState({description: e.target.elements.description.value });       
        await this.setState({id: Date.now()})
        await this.setState({icon: e.target.elements.icon.value})
        console.log(e.target.elements.icon.value)
        /*await this.setState({ type: e.target.elements.type.value })*/        
       /*console.log(this.state.id);*/
      /* const cathegoryIcon = this.getIconURL('food_light');
       console.log(cathegoryIcon);
       await this.setState({icon: cathegoryIcon});*/
       /*console.log(this.state.icon);*/
        this.props.addData(this.state);
        e.target.elements.name.value = '';
        e.target.elements.description.value = '';
    };

    addData = () => { };

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
                            <div className='iconItem'>
                            
                                <input id='food' className='inpRadio' type="radio" name='icon' value={ic} />
                                <label htmlFor="food"><img  className='icon' src={ic} alt="food" /></label>
                            </div>
                            <div className='iconItem'>
                                
                                <input id='clothes' className='inpRadio' type="radio" name='icon' value={clothes} />
                                <label htmlFor="clothes"><img className='icon' src={clothes} alt="food" /></label>
                            </div>
                            <div className='iconItem'>
                                
                                <input id='medicine' className='inpRadio' type="radio" name='icon' value={medicine} />
                                <label htmlFor="medicine"><img className='icon' src={medicine} alt="food" /></label>
                            </div>
                            <div className='iconItem'>
                                
                                <input id='rest'  className='inpRadio' type="radio" name='icon' value={rest} />
                                <label htmlFor="rest"><img className='icon' src={rest} alt="food" /></label>
                            </div>
                        </div> 
                    </div>
                    <button type='submit' className='btnAddNew' >add new category</button>
                </form>
            </div>
        )
    }

}

export default AddCategory;

/*<div className='categoryType'>
                        <p>select type:</p>
                        <select className='inpType' name="type" id="type">
                            <option value="income">income</option>
                            <option value="charges">charges</option>
                        </select>
                    </div>*/

                   /* <Link className="contactLink" to={`/contacts/${cont.firstName}`}>
            <Contact {...cont} key={cont.firstName} />
          </Link>*/



          /*<Router>
                        <Link className= 'linkIconList' to='/categories/iconList'>
                            select icon
                        </Link>
                        <Route path="/categories/iconList" component = {IconList} />
                    </Router>
                    <Link className= 'linkIconList' to='/categories/iconList'>
                            select icon
                    </Link>*/

    /*<div className= 'iconList'>
                        <div className='iconItem'>
                            <img className='icon' src={ic} alt="food" />
                            <input className='inpRadio' type="radio" name='icon' value={ic} />
                        </div>
                        <div className='iconItem'>
                            <img className='icon' src={clothes} alt="food" />
                            <input className='inpRadio' type="radio" name='icon' value={clothes} />
                        </div>
                        <div className='iconItem'>
                            <img className='icon' src={medicine} alt="food" />
                            <input className='inpRadio' type="radio" name='icon' value={medicine} />
                        </div>
                        <div className='iconItem'>
                            <img className='icon' src={rest} alt="food" />
                            <input className='inpRadio' type="radio" name='icon' value={rest} />
                        </div>
                    </div>*/                