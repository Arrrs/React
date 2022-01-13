import React from 'react';
import { useState } from "react";
import styles from './styles/footer.module.css';


function Footer ({ nav, reloadNav }) {
    let [headerNav, setHeaderNav] = useState(nav);
    let localNavOut = (param, value) => reloadNav(param, value);
    const stateParam = (param, value) => {
        setHeaderNav((prevNav) => ({
            ...prevNav,
            [param]: value,
        }));
        localNavOut(param, value);
    };

    return  <div className={styles.main}>
                <div className={styles.nav}>
                    <ul>
                        <li onMouseUp={() => stateParam("navPage", 5)}>О нас</li>
                        <li onMouseUp={() => stateParam("navPage", 6)}>Контакты</li>
                        <li onMouseUp={() => stateParam("navPage", 7)}>Реклама</li>
                        <li onMouseUp={() => stateParam("navPage", 8)}>Карьера</li>
                        <li onMouseUp={() => stateParam("navPage", 9)}>Предложения</li>
                    </ul>
                </div>
            </div>

}
export default Footer;