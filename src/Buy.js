import React from 'react';
import { useState } from 'react';
import styles from './styles/buy.module.css';


function Buy ({ name }) {
   
    
    if ( name ) {
        return  <div key={name.id} className={styles.itemCont} >
                    <img src={name.src} alt="" className={styles.image}/>
                    <div className={styles.name}>{name.name} {name.year}</div>
                    <div className={styles.prices}>
                        <p>{name.price} $</p>
                        <p><span>&middot; </span> {(name.price * 27.25).toFixed(0)} грн</p>
                    </div>
                    <div className={styles.accident}>{name.accident? 'Був в ДТП' : 'Не був в ДТП'}</div>
                    <div className={styles.infoCont}>
                        <div className=''> <img className={styles.check} src={name.fuel ? "./assets/images/plus.png" : "./assets/images/min.png"} alt="" /> Двигун: {name.fuel ? name.fuel : 'Інформація відсутня'}</div>
                        <div className=""> <img className={styles.check} src={name.power ? "./assets/images/plus.png" : "./assets/images/min.png"} alt="" /> Потужність: {name.power ? name.power : 'Інформація відсутня'}</div>
                        <div className=""> <img className={styles.check} src={name.transmission ? "./assets/images/plus.png" : "./assets/images/min.png"} alt="" /> Коробка передач: {name.transmission ? name.transmission : 'Інформація відсутня'}</div>
                        <div className=""> <img className={styles.check} src={name.color ? "./assets/images/plus.png" : "./assets/images/min.png"} alt="" /> Колір: {name.color ? name.color : 'Інформація відсутня'}</div>
                        <div className=""> <img className={styles.check} src={name.users ? "./assets/images/plus.png" : "./assets/images/min.png"} alt="" /> Кількість власників: {name.users ? name.users : 'Інформація відсутня'}</div>
                        <div className=""> <img className={styles.check} src={name.wanted ? "./assets/images/plus.png" : "./assets/images/min.png"} alt="" /> В розшуку: {name.wanted ? name.wanted : 'Інформація відсутня'}</div>
                        <div className=""> <img className={styles.check} src={name.driver ? "./assets/images/plus.png" : "./assets/images/min.png"} alt="" /> Привід: {name.driver ? name.driver : 'Інформація відсутня'}</div>
                    </div>
                    <div className={styles.descript}><span>Опис: </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae praesentium dolores laborum fugiat distinctio! Libero quaerat reprehenderit deserunt quo pariatur illo eius molestiae doloremque excepturi, iure beatae assumenda quos, aut sint quam ipsum, dolorum ipsam? Veniam recusandae ab esse adipisci et voluptates, quaerat libero, enim numquam animi minima in quam nesciunt accusantium. Numquam, voluptatum? Animi voluptates commodi sunt suscipit quia!</div>

                </div>
    }
    else 
    {
        return  <div key={name.id} className={styles.empty}>
                    <h2 className={styles.emptyString}>Click on a product <br />to view information </h2>
                    <img src="./assets/images/left.png" alt="" className={styles.left} />
                </div>
    }
    
}

export default Buy;