import React, { Component } from 'react';
import "../css/category_styles.css";
import food from '../icons/category/food_light.png';
import clothes from '../icons/category/clothes_light.png';
import medicine from '../icons/category/medicine.png';
import rest from '../icons/category/rest_light.png';


class IconList extends Component {

	saveIcon = (e) => {
		/*const name = e.getAttribute("data-icon");
		console.log(name);*/ 
		console.log('I am here' )
	}



	render(){
		return (
			<div className= 'iconContainer'>
				<ul className='listIcons'>
					<li className= 'blockIcon'>
						<img className='icon' src={food} alt='icon' data-icon='food' onClick = {this.saveIcon} />
					</li>
					<li className= 'blockIcon'>
						<img className='icon' src={clothes} alt='icon' data-icon='clothes' onClick = {this.saveIcon} />
					</li>
					<li className= 'blockIcon'>
						<img className='icon' src={medicine} alt='icon' data-icon='medicine' onClick = {this.saveIcon}  />
					</li>
					<li className= 'blockIcon'>
						<img className='icon' src={rest} alt='icon' data-icon='rest' onClick = {this.saveIcon}  />
					</li>
					<li className= 'blockIcon'>
						<img className='icon' src={food} alt='icon' data-icon='food' onClick = {this.saveIcon}  />
					</li>
					<li className= 'blockIcon'>
						<img className='icon' src={clothes} alt='icon' data-icon='clothes' onClick = {this.saveIcon}  />
					</li>
					<li className= 'blockIcon'>
						<img className='icon' src={medicine} alt='icon' data-icon='medicine' onClick = {this.saveIcon}  />
					</li>
					<li className= 'blockIcon'>
						<img className='icon' src={rest} alt='icon' data-icon='rest' onClick = {this.saveIcon}  />
					</li>
					<li className= 'blockIcon'>
						<img className='icon' src={food} alt='icon' data-icon='food' onClick = {this.saveIcon}  />
					</li>
					<li className= 'blockIcon'>
						<img className='icon' src={clothes} alt='icon' data-icon='clothes' onClick = {this.saveIcon}  />
					</li>
					<li className= 'blockIcon'>
						<img className='icon' src={medicine} alt='icon' data-icon='medicine' onClick = {this.saveIcon}  />
					</li>
					<li className= 'blockIcon'>
						<img className='icon' src={rest} alt='icon' data-icon='rest' onClick = {this.saveIcon}  />
					</li>
				</ul>
			</div>
			)
	}
}

export default IconList;