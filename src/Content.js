import React from "react";
import { useState } from "react";
import styles from "./styles/content.module.css";
import List from "./List";
import Buy from "./Buy";
import arr from "../assets/cars.json";
import Login from "./Login";
import Singin from "./Singin";

function Content({ numb }) {
    let contentPage = numb; 
    console.log(numb);
    const [a, setA] = useState(numb);
    const setB = (e) => {
        setA(contentPage = e)
    }
    // const logOutStatus = logOut;
    const loginswitcher = (e) => {
        console.log(e);
        contentPage = e;
        setB(e);
        console.log(contentPage);
    };
    console.log(contentPage);
    // console.log(logOutStatus);
    const [logPage, setlogPage] = useState(true);
    const loginPageChange = () => {
        setlogPage(!logPage);
    };
    const [enteryPages, setEnteryPages] = useState(true);
    const enteryChange = () => {
        setEnteryPages(!enteryPages);
    };
    const [name, setName] = useState("");
    const handleNameChange = (name) => {
        setName(name);
    };
    const [listPages, setlistPages] = useState(true);
    const listPageChange = () => {
        setlistPages(!listPages);
    };

    // if (logOutStatus) {
    // enteryChange();
    // }

    // if (enteryPages && contentPage == 0) {
    //     if (logPage) {
    //         return (
    //             <div key={"main"} id="main" className={styles.main}>
    //                 <Login
    //                     enteryPageChange={loginPageChange}
    //                     enteryChange={enteryChange}
    //                 />
    //             </div>
    //         );
    //     } else if (!logPage) {
    //         return (
    //             <div key={"main"} id="main" className={styles.main}>
    //                 <Singin
    //                     enteryPageChange={loginPageChange}
    //                     enteryChange={enteryChange}
    //                 />
    //             </div>
    //         );
    //     }
    // }
    switch (contentPage) {
        case 0:
            if (logPage) {
                return (
                    <div key={"main"} id="main" className={styles.main}>
                        <Login
                            enteryPageChange={loginPageChange}
                            loginswitcher={loginswitcher}
                        />
                    </div>
                );
            } else if (!logPage) {
                return (
                    <div key={"main"} id="main" className={styles.main}>
                        <Singin
                            enteryPageChange={loginPageChange}
                            enteryChange={enteryChange}
                        />
                    </div>
                );
            }
            break;
        case 1:
            return <div>12sadasdasd3</div>;
            break;
        case 2:
            return <div>12sadasdasd3</div>;
            break;
    }
    if (listPages) {
        return (
            <div key={"main"} id="main" className={styles.main}>
                <div className={styles.listCont}>
                    <div id="list" className={styles.list}>
                        <List items={arr} onClick={handleNameChange} />
                    </div>
                    <div id="buy" className={styles.buy}>
                        <Buy name={name} />
                    </div>
                </div>
            </div>
        );
    }
    return null;
}
export default Content;

// <div key={"main"} id="main" className={styles.main}>
//     <div id="list" className={styles.list}><List items={arr} onClick={handleNameChange}/></div>
//     <div id="buy" className={styles.buy}><Buy name={name} /></div>
// </div>
