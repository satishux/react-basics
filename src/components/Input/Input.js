import React, { useState } from 'react';

import classes from './Input.module.css';


const Input = ({ inputAdded }) => {
    const [inputVal, setInputVal] = useState('');

    return (
        <div className={classes.inputContainer}>
            <input className={classes.input} value={inputVal} onChange={(event) => setInputVal(event.target.value)}  type="text" />
            <button className={classes.inputBtn} onClick={() => inputAdded(inputVal) } >Add</button>
        </div>
    )
}

export default Input
