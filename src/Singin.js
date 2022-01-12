import React from 'react';
import { useState } from 'react';
import styles from './styles/singin.module.css';

function Singin ({ enteryPageChange, enteryChange }) {
    const changeToLog = () => enteryPageChange();
    const registred = () => enteryChange();
    return  <div className={styles.main}>
                <h2>Registration</h2>
                <h3>Name:</h3>
                <input type="text" />
                <h3>Surname:</h3>
                <input type="text" />
                <h3>Email:</h3>
                <input type="text" />
                <h3>Mobile:</h3>
                <input type="text" />
                <h3>Password:</h3>
                <input type="text" />
                <button onMouseUp={registred}>Log In</button>
                <h5 onMouseUp={changeToLog}>I have an account</h5>
            </div>;
}

export default Singin;