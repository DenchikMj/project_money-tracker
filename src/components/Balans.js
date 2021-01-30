import React from 'react';
import '../css/balans.css';


function getName(aUser) {
    if (Object.keys(aUser).length !== 0) {
        return `${aUser.name} ${aUser.surname}`;
    }
    return 'not name';
}


function Balans(props) {
    return (
        <div className="balans">
            <img className="contact-img-profile" src="../img/profile.png" alt="profile"></img>
            <p className="balans-name"> {getName(props.user)} </p>
            <p className="balans-summ"> $ {props.balans}</p>
        </div>
    )
}

export default Balans;