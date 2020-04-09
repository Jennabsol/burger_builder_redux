import React from 'react';
import classes from 'components/UI/Backdrop/Backdrop.module.css'

const backdrop = (props) => {
    return props.show && <div className={classes.Backdrop} onClick={props.toggle}></div>
}

export default backdrop