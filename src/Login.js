import { func } from 'prop-types';
import React from 'react';
import { useState } from 'react';
import styles from './styles/login.module.css';

function Login ({ localPageContent, localContOut }) {
    let localNav = localPageContent;
    let localOut = (param, value, param2, value2) => localContOut(param, value, param2, value2);
    let [globNav, setGlobNav] = useState(localNav);
    // const stateParam = (param, value) => {
    //     localOut(param, value);
    //     setGlobNav((prevNav) => ({
    //         ...prevNav,
    //         [param]: value,
    //     }));
    //     console.log("____" + globNav);
    // };
    
        
        return  <div className={styles.main}>
                <h3>Email:</h3>
                <input type="text" />
                <h3>Password:</h3>
                <input type="password" />
                <button onMouseUp={() => {localOut("navPage", 1); localOut("showHeaderMenu", true) }} >Log In</button>
                <h5 onMouseUp={() => localOut("haveAcc", false)} >Sing in</h5>
            </div>
    
    
}

export default Login;



// const changeToSing = () => enteryPageChange();
// // const logged = () => enteryChange();
// const list = (e) => loginswitcher(e);
// const funccc = () => func();
// // const [logPage, setlogPage] = useState(true);
// // const loginPageChange = () => {
    // //     setlogPage(!logPage);
    // // };
    
    
    // {/* <button onMouseUp={logged}>Log In</button>
    // <button onMouseUp={() => {list(1), funccc()}} >Log In</button>
    // <h5 onMouseUp={changeToSing} >Sing in</h5> */}