import React, { Component } from "react";
import "../css/category_styles.css";
import ic from '../icons/category/food_light.png';

class AddCategory extends Component {

    state = {
        id: '',
        type: '',
        icon: '', //url
        iconColor: '',
        name: '',
        description: ''
    }

    createIdGenerator = function () {
        let count = 1;
        return function () {
            return count++
        }
    }

    getID = () => {         
        return this.createIdGenerator()
    }

    setInformation = async (e) => {
        e.preventDefault();
        await this.setState({ name: e.target.elements.name.value });
        await this.setState({ description: e.target.elements.description.value });        
       /*console.log((this.getID)());
       console.log(this.getID());*/
      /*console.log(getID());*/
      const currentID=this.getID()
        await this.setState({ id: this.currentID})
        await this.setState({ type: e.target.elements.type.value })
        /*await this.setState({ icon: {ic}})*/
        /*console.log(`before: ${this.state.icon}`)*/
       /* console.log(this.state.description);*/
       console.log(currentID);
        this.props.addData(this.state);
        e.target.elements.name.value = '';
        e.target.elements.description.value = '';
    };

    addData = () => { };

    render() {        
        return (
            <div>
                <form className='addCategory' onSubmit={this.setInformation}>
                    <h2>New category</h2>
                    <div className='categoryType'>
                        <p>select type:</p>
                        <select className='inpType' name="type" id="type">
                            <option value="income">income</option>
                            <option value="charges">charges</option>
                        </select>
                    </div>

                    <div className='categoryName'>
                        <p>name:</p>
                        <input className='inpName' type='text' name='name' />
                    </div>
                    <div className='categoryDescription' >
                        <p>description:</p>
                        <input className='inpDescr' type='text' name='description' />
                    </div>

                    <button type='submit' className='btnAddNew' >add new category</button>
                </form>
            </div>
        )
    }

}

export default AddCategory;