import React, {useState} from 'react'
import './Form.css'
import axios from 'axios'

import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

function Form() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
    
        console.log(email, password)

        const response = await axios.post('http://localhost:3001/login',
            JSON.stringify({email, password}),
            {
                headers: { 'Content-Type': 'aplication/json', }
                
            }
        )
    }

    return (
        <div>
            <form className='loginForm'>
                <div className='inputContainer'>
                    <Input email onchange={(e) => setEmail(e.target.value)} />
                    <Input password onchange={(e) => setPassword(e.target.value)} /> 
                </div>
                <div className='loginInformationsContainer'>
                    <div className='loginInformations'>
                        <div className='checkboxContainer'><Input checkbox className="checkbox"/><label>Remeber me</label></div>
                        <div className='forgotPassword'><label>Forgot Password ?</label></div>
                    </div>
                </div>
                <div className='loginBtnContainer'><Button click={(e) => handleLogin(e)}/></div>
            </form>
        </div>
    )
}

export default Form;