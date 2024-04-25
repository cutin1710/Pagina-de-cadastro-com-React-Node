import React, { Component } from 'react'
import './Input.css'

export default (props) => {

    let classes = 'input '
    classes += props.email ? 'email' : ''
    classes += props.password ? 'password' : ''

    return(
        <div>
            <input type={classes} name={classes} placeholder={classes} required/>
            <input type={classes} name={classes} placeholder={classes} required/>
        </div>
    )

}