import React from "react";
import { useState } from 'react';
import styles from "./styles/personalCab.module.css";

function PersonalCab ({localPageContent, localContOut}) {
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
    console.log("Pers-cab - " + localNav.name);
    return  <div className={styles.main}>
                <img src={localNav.profilephoto} alt="" />
                <p>{localNav.name} {localNav.surname}</p>
                <p>{localNav.surname}</p>
                <p>{localNav.email}</p>
                <p>{localNav.telephone}</p>
            </div>;
}

export default PersonalCab;