import React from "react";
import { useState } from 'react';
import styles from './styles/app.module.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
	let [numb, setStr] = useState(0);
	let str = (e) => {
		console.log("str change to " + e);
		setStr(numb = e);
	}
  
	return	<div className="main">
				<Header str={str}/>
				<Content numb={numb}/>
				{/* <Content numb={numb} logOut={logOut}/> */}
				<Footer str={str}/>
			</div>
}
	
export default App;
	




	// <div key={"main"} id="main" className={styles.main}>
	// 			<div id="list" className={styles.list}><List items={arr} onClick={handleNameChange}/></div>
	// 			<div id="buy" className={styles.buy}><Buy name={name} /></div>
	// 		</div>
