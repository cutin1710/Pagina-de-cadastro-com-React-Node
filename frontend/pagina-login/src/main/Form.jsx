import React, {useState} from 'react'
import './Form.css'
import axios from 'axios'

import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

function Form() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault();
    
        console.log(email, password)

        try{
            const response = await axios.post('http://localhost:3000/login',
                JSON.stringify({email, password}),
                {
                    headers: { 'Content-Type': 'application/json' }                
                }
            )
            setUser(response.data)

        } catch(error) {
            if(!error?.response) {
                setError('Erro ao acessar o servidor')
            } else if (error.response.status == 401){
                setError('Usuário ou senha inválidos')
            }
        }
    }

    const handleLogout = async (e) => {
        e.preventDefault()
        setUser(null)
        setError('')
    }

    return (
        <div>
            {user == null ? (
                <div>
                    <h1 className='formTitle'>Login</h1>
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
                    <p className='errorWarning'>{error}</p>
                </div>
            ) : (
                <div>
                    <h2 className='formTitle'>Olá, {user.name}</h2>
                    <button type='button' className='logoutBtn' onClick={(e) => handleLogout(e)}>Logout</button>
                </div>
                    
            )}
        </div>
    )
}

export default Form;