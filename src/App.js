import React from "react";
import { useState } from 'react';
import styles from './styles/app.module.css';
import List from './List';
import Buy from './Buy';
import arr from '../assets/cars.json';

function App() {

	const [ name, setName ] = useState('');
	const handleNameChange = (name) => {
		setName(name)
	};
  
	return	<div key={"main"} id="main" className={styles.main}>
				<div id="list" className={styles.list}><List items={arr} onClick={handleNameChange}/></div>
				<div id="buy" className={styles.buy}><Buy name={name} /></div>
			</div>
}

export default App;