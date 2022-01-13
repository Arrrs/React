import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles/app.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import local from "../assets/state.json"

let i = local[0];

function App() {
    useEffect(() => {
        document.title = `React`;
    }, []);
    console.log("App render");
    let [nav, setNav] = useState(i);
    const reloadNav = (param, value) => {
        setNav(prevNav => ({
            ...prevNav,
            [param]: value,
        }));
    };
    console.log(nav.navPage + " - app - nav-page");

    return (
        <div className="main">
            <Header nav={nav} onChange={reloadNav} />
            <Content nav={nav} reloadNav={reloadNav} />
            <Footer nav={nav} reloadNav={reloadNav} />
        </div>
    );
}

export default App;

// setNav(prevNav => { 
// 	return {
// 		...prevNav,
// 		[param]: value,
// 	}
// });

// /* <Content numb={numb} logOut={logOut}/> */

// {/* <Content nav={nav}/>
// <Footer nav={nav}/>  */}

// let [numb, setStr] = useState(0);
// let str = (e) => {
// 	console.log("str change to " + e);
// 	setStr(numb = e);
// }

// <div key={"main"} id="main" className={styles.main}>
// 			<div id="list" className={styles.list}><List items={arr} onClick={handleNameChange}/></div>
// 			<div id="buy" className={styles.buy}><Buy name={name} /></div>
// 		</div>
