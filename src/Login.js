import { func } from 'prop-types';
import React from 'react';
import { useState } from 'react';
import styles from './styles/login.module.css';

function Login ({ enteryPageChange, loginswitcher}) {
    const changeToSing = () => enteryPageChange();
    // const logged = () => enteryChange();
    const list = (e) => loginswitcher(e);
    // const [logPage, setlogPage] = useState(true);
    // const loginPageChange = () => {
    //     setlogPage(!logPage);
    // };
    return  <div className={styles.main}>
                <h3>Email:</h3>
                <input type="text" />
                <h3>Password:</h3>
                <input type="text" />
                {/* <button onMouseUp={logged}>Log In</button> */}
                <button onMouseUp={() => list(1)} >Log In</button>
                <h5 onMouseUp={changeToSing} >Sing in</h5>
            </div>
}

export default Login;