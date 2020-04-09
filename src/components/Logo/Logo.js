import React from 'react'
import classes from 'components/Logo/Logo.module.css'
import burgerLogo from 'assets/images/original.png'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt='Burgers'></img>
    </div>
)

export default logo