import React, { Component } from 'react'
import './Form.css'

import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

export default class Form extends Component {
    
    render() {
        return (
            <div>
                <form action="" method='POST'>
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
                    <div className='loginBtnContainer'><Button /></div>
                </form>
            </div>
        )
    }
}