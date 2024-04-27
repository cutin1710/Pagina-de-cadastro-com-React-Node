import React, { Component } from 'react'
import './Input.css'

export default (props) => {

    let classes = ''
    classes += props.email ? 'Email' : ''
    classes += props.password ? 'Password' : ''
    classes += props.checkbox ? 'checkbox' : ''

    return(
        <div>
            <input type={classes} name={classes} placeholder={classes} className={classes}  />
        </div>
    )

}