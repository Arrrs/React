import React, { useState } from "react";
import styles from "./styles/content.module.css";
import List from "./List";
import Buy from "./Buy";
import h from "../assets/cars.json";
import local from "../assets/state.json";
import Login from "./Login";
import Singin from "./Singin";
import Favorite from "./Favorite";
import AddCar from "./AddCar";
import PersonalCab from "./PersonalCab";
import AboutAss from "./AboutAss";
import Contacts from "./Contacts";
import Advertising from "./Advertising";
import Suggestions from "./Suggestions";


let arr = h;
function Content({ nav, reloadNav }) {
    console.log("Content start-page - " + nav.navPage);
    let localPageContent = nav;
    let [contentNav, setContentNav] = useState(nav);
    let localContOut = (param, value) => reloadNav(param, value);
    const stateParam = (param, value) => {
        setContentNav((prevNav) => ({
            ...prevNav,
            [param]: value,
        }));
        
        localContOut(param, value);
    };
    const [name, setName] = useState("");
    const handleNameChange = (name) => {
        setName(name);
    };
    console.log("Content pre-page list - " + contentNav.navPage);
    console.log("Content pre-page user - " + contentNav.surname);
    switch (localPageContent.navPage) {
        case 0:
            if (localPageContent.enteryPage) {
                if (localPageContent.haveAcc) {
                    return (
                        <div key={"main"} id="main" className={styles.main}>
                            <Login
                                localPageContent={localPageContent}
                                localContOut={stateParam}
                            />
                        </div>
                    );
                } else {
                    return (
                        <div key={"main"} id="main" className={styles.main}>
                            <Singin
                                localPageContent={localPageContent}
                                localContOut={stateParam}
                            />
                        </div>
                    );
                }
            } else {
                return <div>You are already registred ...</div>;
            }
        case 1:
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
        case 2:
            return (
                <div key={"main"} id="main" className={styles.main}>
                    <Favorite />
                </div>
            );
        case 3:
            return (
                <div key={"main"} id="main" className={styles.main}>
                    <AddCar />
                </div>
            );
        case 4:
            return (
                <div key={"main"} id="main" className={styles.main}>
                    <PersonalCab
                        localPageContent={localPageContent}
                        localContOut={stateParam}
                    />
                </div>
            );
        case 5:
            return (
                <div key={"main"} id="main" className={styles.main}>
                    <AboutAss />
                </div>
            );
        case 6:
            return (
                <div key={"main"} id="main" className={styles.main}>
                    <Contacts />
                </div>
            );
        case 7:
            return (
                <div key={"main"} id="main" className={styles.main}>
                    <Advertising />
                </div>
            );
        case 8:
            return (
                <div key={"main"} id="main" className={styles.main}>
                    <Suggestions/>
                </div>
            );
        default:
            return (
                <div key={"main"} id="main" className={styles.main}>
                    <Singin localPageContent={localPageContent} localContOut={stateParam} />
                </div>
            );
    }

    return null;
}
export default Content;




// let [contentPage, setContentPage] = useState(numb)
// // const rrr = numb;
// // const qqq = (rrr) => {
// //     setContentPage(rrr)
// // }
// // let contentPage = numb;
// console.log(numb);
// const loginswitcher = (e) => {
//     setContentPage(contentPage = e);
//     console.log(e);
//     // return contentPage = e;
//     // setB(e);
//     console.log(contentPage);
// };
// // const [a, setA] = useState(numb);
// // const setB = (e) => {
// //     setA(contentPage = e)
// // }
// // const logOutStatus = logOut;
// console.log(contentPage);
// // console.log(logOutStatus);
// const [logPage, setlogPage] = useState(true);
// const loginPageChange = () => {
//     setlogPage(!logPage);
// };
// const [enteryPages, setEnteryPages] = useState(true);
// const enteryChange = () => {
//     setEnteryPages(!enteryPages);
// };
// const [name, setName] = useState("");
// const handleNameChange = (name) => {
//     setName(name);
// };
// const [listPages, setlistPages] = useState(true);
// const listPageChange = () => {
//     setlistPages(!listPages);
// };

// // if (logOutStatus) {
// // enteryChange();
// // }

// <div key={"main"} id="main" className={styles.main}>
//     <div id="list" className={styles.list}><List items={arr} onClick={handleNameChange}/></div>
//     <div id="buy" className={styles.buy}><Buy name={name} /></div>
// </div>

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
