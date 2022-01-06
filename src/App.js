import React from "react";
import { useState } from 'react';
import styles from './styles/app.module.css';
import List from './List';
import Buy from './Buy'

function App() {

	const [ name, setName ] = useState('');
	const handleNameChange = (name) => {
		setName(name)
	};

	let arr = [
		{id: 1, name: 'Volkswagen Touareg', year: 2016, price: 43500, mileage: '43 тис. км', location: 'Дрогобич', fuel: 'Дизель 3.0', transmission: 'Автомат', accident: false, date: '04.01.2022', src: './assets/images/Car_1.jpg', power: '262 к.с. / 193 кВт', color: 'Сірий металік', users: false, driver: 'Повний', wanted: 'Ні'},
		{id: 2, name: 'Volkswagen Golf', year: 2007, price: 6950, mileage: '182 тис. км', location: 'Самбір', fuel: 'Бензин 1.6', transmission: 'Ручна', accident: false, date: '04.01.2022', src: './assets/images/Car_2.jpg', power: '105 к.с. / 77 кВт', color: 'Синій металік', users: false, driver: 'Передній', wanted: 'Ні'},
		{id: 3, name: 'Audi Q5 Premium Plus', year: 2016, price: 11500, mileage: '109 тис. км', location: 'Харків', fuel: 'Бензин 2.0', transmission: 'Автомат', accident: true, date: '22.12.2021', src: './assets/images/Car_3.jpg', power: false, color: 'Білий', users: '1', driver: 'Повний', wanted: 'Ні'},
		{id: 4, name: 'Toyota Camry', year: 2015, price: 18700, mileage: '43 тис. км', location: 'Київ', fuel: 'Бензин 2.0', transmission: 'Автомат', accident: false, date: '01.01.2222', src: './assets/images/Car_4.jpg', power: '150 к.с. / 110 кВт', color: 'Сірий металік', users: '2', driver: 'Передній', wanted: 'Ні'},
		{id: 5, name: 'Volvo XC90 T5', year: 2021, price: 72353, mileage: 'Без пробігу', location: 'Запоріжжя', fuel: 'Бензин 2.0', transmission: 'Автомат', accident: false, date: '02.01.2022', src: './assets/images/Car_5.jpg', power: '250 к.с ', color: 'Pebble grey metallic', users: '0', driver: 'Повний', wanted: false}, 
		{id: 6, name: 'Ford Focus', year: 2016, price: 9599, mileage: '73 тис. км', location: 'Київ', fuel: 'Бензин 2.0', transmission: 'Не вказано', accident: true, date: '06.01.2222', src: './assets/images/Car_6.jpg', power: false, color: 'Сірий', users: '1', driver: 'Передній', wanted: 'Ні'},
		{id: 7, name: 'Skoda Octavia A5', year: 2011, price: 8400, mileage: '260 тис. км', location: 'Бердичів ', fuel: 'Дизель 1.6', transmission: 'Ручна ', accident: false, date: '02.01.2022', src: './assets/images/Car_7.jpg', power: '140.08 к.с. / 103 кВт', color: 'Білий', users: '3', driver: 'Передній', wanted: 'Ні'}
	];  
	return	<div key={"main"} id="main" className={styles.main}>
				<div id="list" className={styles.list}><List items={arr} onClick={handleNameChange}/></div>
				<div id="buy" className={styles.buy}><Buy name={name} /></div>
			</div>
}

export default App;