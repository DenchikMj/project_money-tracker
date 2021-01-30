import React, { Component } from 'react';

class Settings extends Component {

    state = {
        id: 1,
        name: '',
        surname: '',
        telephone: '',
        avatar: null
    }

    addUserInLocalStorage = (e) => {
        const user = {
            id: 1,
            name: e.target.elements.name.value,
            surname: e.target.elements.surname.value,
            telephone: e.target.elements.telephone.value,
            avatar: null
        }
        localStorage.setItem('Users', JSON.stringify(user));
    }

    getUserObjFromLocalStorage = () => {
        let data = JSON.parse(localStorage.getItem('Users'));
        return data !== null ? data : {};
    }

    componentDidMount() {
        const sattingsdObj = JSON.parse(localStorage.getItem('Users'));
        this.setState({ id: sattingsdObj.id, name: sattingsdObj.name, surname: sattingsdObj.surname, telephone: sattingsdObj.telephone });
    }

    render() {
        return (
            <div className="settings">
                <form className='addCategory' onSubmit={this.addUserInLocalStorage}>
                    <h2>Settings</h2>

                    <div className='categoryName'>
                        <p>name:</p>
                        <input className='inpName' type='text' name='name' defaultValue={this.state.name} />
                    </div>
                    <div className='categoryName'>
                        <p>surname:</p>
                        <input className='inpName' type='text' name='surname' defaultValue={this.state.surname} />
                    </div>
                    <div className='categoryName'>
                        <p>telephone:</p>
                        <input className='inpName' type='text' name='telephone' defaultValue={this.state.telephone} />
                    </div>
                    <button type='submit' className='btnAddNew' >add User</button>
                </form>
            </div>
        )
    }
}

export default Settings;