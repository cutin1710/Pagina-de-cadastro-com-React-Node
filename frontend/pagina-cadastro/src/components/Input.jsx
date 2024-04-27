import React, { Component } from 'react'
import './Input.css'

export default (props) => {

    let classes = ''
    classes += props.email ? 'email' : ''
    classes += props.password ? 'password' : ''
    classes += props.checkbox ? 'checkbox' : ''
    classes += props.submit ? 'submit' : ''

    return(
        <div>
            <input type={classes} name={classes} placeholder={classes} className={classes} onChange={props.onchange} />
        </div>
    )

}