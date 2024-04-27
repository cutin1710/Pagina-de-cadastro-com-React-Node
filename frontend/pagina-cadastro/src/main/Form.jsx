import React, { Component } from 'react'
import './Form.css'

import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

export default class Form extends Component {

    constructor (props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin = (e) => {
        e.preventDefault();
    
        console.log('login clicked')
    }

    render() {
        return (
            <div>
                <form className='loginForm'>
                    <div className='inputContainer'>
                        <Input email />
                        <Input password />
                    </div>
                    <div className='loginInformationsContainer'>
                        <div className='loginInformations'>
                            <div className='checkboxContainer'><Input checkbox className="checkbox"/><label>Remeber me</label></div>
                            <div className='forgotPassword'><label>Forgot Password ?</label></div>
                        </div>
                    </div>
                    <div className='loginBtnContainer'><Button click={this.handleLogin}/></div>
                </form>
            </div>
        )
    }
}