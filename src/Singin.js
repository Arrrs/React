import React from 'react';
import { useState } from 'react';
import styles from './styles/singin.module.css';

function Singin ({ localPageContent, localContOut }) {
    let localNav = localPageContent;
    let localOut = (param, value, param2, value2) => localContOut(param, value, param2, value2);
    let [globNav, setGlobNav] = useState(localNav);
    const stateParam = (param, value) => {
        setGlobNav((prevNav) => ({
            ...prevNav,
            [param]: value,
        }));
        localOut(param, value);
    };
    let name = '';
    let surname = '';
    let email = '';
    let telephone = '';
    let password = '';
    function nameWriter(event) {
        return name = event.target.value;
    }
    function surnameWriter(event) {
        return surname = event.target.value;
    }
    function emailWriter(event) {
        return email = event.target.value;
    }
    function telephoneWriter(event) {
        return telephone = event.target.value;
    }
    function passwordWriter(event) {
        return password = event.target.value;
    }
    function userWriter() {
        localOut("navPage", 4); 
        localOut("showHeaderMenu", true);
        localOut("name", name);
        localOut("surname", surname);
        localOut("email", email);
        localOut("telephone", telephone);
        localOut("password", password);
    }

    return  <div className={styles.main}>
                <h2>Registration</h2>
                <h3>Name:</h3>
                <input type="text" onBlur={() =>nameWriter(event)}/>
                <h3>Surname:</h3>
                <input type="text" onBlur={() =>surnameWriter(event)}/>
                <h3>Email:</h3>
                <input type="text" onBlur={() =>emailWriter(event)}/>
                <h3>Mobile:</h3>
                <input type="text" onBlur={() =>telephoneWriter(event)}/>
                <h3>Password:</h3>
                <input type="text" onBlur={() =>passwordWriter(event)}/>
                <button onMouseUp={() => { userWriter() }}>Log In</button>
                <h5 onMouseUp={() => localOut("haveAcc", true)}>I have an account</h5>
            </div>;
}

export default Singin;