import React from 'react'
import './Button.css'

export default (props) => {

    return (
        <div>
            <button type='submit' className='loginBtn' onClick={(e) => props.click && props.click()}>Login</button>
        </div>
    )
}