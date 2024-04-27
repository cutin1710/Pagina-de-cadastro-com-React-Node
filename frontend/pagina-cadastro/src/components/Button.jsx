import React from 'react'
import './Button.css'

export default (props) => {

    return (
        <div>
            <button type='submit' className='loginBtn' onClick={props.click}>Login</button>
        </div>
    )
}