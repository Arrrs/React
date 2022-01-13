import React from "react";
import { useState } from "react";
import styles from "./styles/header.module.css";

function Header({ nav, onChange }) {
    let localHeaderNav = nav;
    let [headerNav, setHeaderNav] = useState(nav);
    let localNavOut = (param, value) => onChange(param, value);
    console.log("header-start-func - " + headerNav.showHeaderMenu);
    const stateParam = (param, value) => {
        localNavOut(param, value);
        setHeaderNav((prevNav) => ({
            ...prevNav,
            [param]: value,
        }));
        console.log(headerNav);
    };
    
    
    console.log("Header pre-render - " + headerNav.showHeaderMenu);
    console.log("Header pre-page-numb - " + headerNav.navPage);
    if (localHeaderNav.showHeaderMenu) {
        return (
            <div className={styles.main}>
                <img onMouseUp={() => stateParam("navPage", 0)}
                    src="http://localhost:3000/assets/images/logo.png"
                    alt=""
                    className={styles.logo}
                    />
                <div className={styles.nav}>
                    <ul>
                        <li onMouseUp={() => stateParam("navPage", 1)}>Товары</li>
                        <li onMouseUp={() => stateParam("navPage", 2)}>Избранное</li>
                        <li onMouseUp={() => stateParam("navPage", 3)}>Добавить</li>
                        <li onMouseUp={() => stateParam("navPage", 4)}>Личный кабинет</li>
                    </ul>
                </div>
                <img
                    onMouseUp={() => {stateParam("showHeaderMenu", false), stateParam("navPage", 0)}}
                    src="http://localhost:3000/assets/images/exit.png"
                    alt=""
                    className={styles.exit}
                />
            </div>
        );
    } else {
        return (
            <div className={styles.main}>
                <img
                    src="http://localhost:3000/assets/images/logo.png"
                    alt=""
                    className={styles.logo}
                />
                <div className={styles.nav}>
                    <h1 className={styles.greet}>Wellcome</h1>
                </div>
                <div className={styles.empty}></div>
            </div>
        );
    }
}
export default Header;

// const stateTwoParam = (param1, value1, param2, value2) => {
//     setHeaderNav((prevNav) => ({
//         ...prevNav,
//         [param1]: value1,
//         [param2]: value2,
//     }));
//     console.log(headerNav);
//     setHeaderNav((prevNav) => ({
//         ...prevNav,
//         [param2]: value2,
//     }));
//     console.log(headerNav);
// }

// let [headerPage, setHeaderPage] = useState(listPage);
// let localPageOut = (param, value) => reloadListPage(param, value);
// const pageButton = (param, value) => {
//     setHeaderPage((prevNav) => ({
//         ...prevNav,
//         [param]: value,
//     }));
//     localPageOut(param, value);
// };

// const headerlist = (e) => str(e);
// const windExit = (e) => str(e);

// let logOut = (e,w) => {
//     console.log("log-out")
//     setHeaderNav(headerNav.showHeaderMenu = e, headerNav.navPage = w)
// }
// setHeaderNav = stateUpdater => headerNav = stateUpdater(headerNav);

// let eee = [...showHeaderMenu];
// eee.showHeaderMenu = e;
// setHeaderNav(eee);
