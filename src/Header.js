import React from 'react';
import styles from './styles/header.module.css';


function Header ({ str }) {
    const list = (e) => str(e);
    const windExit = (e) => str(e);
    
    return  <div className={styles.main}>
                <img src="http://localhost:3000/assets/images/logo.png" alt="" className={styles.logo}/>
                <div className={styles.nav}>
                    <ul>
                        <li onMouseUp={() => list(1)}>Товары</li>
                        <li onMouseUp={() => list(2)}>Избранное</li>
                        <li onMouseUp={() => list(3)}>Добавить</li>
                        <li onMouseUp={() => list(4)}>Личный кабинет</li>
                    </ul>
                </div>
                <img onMouseUp={() => windExit(0)} src="http://localhost:3000/assets/images/exit.png" alt="" className={styles.exit}/>
            </div>

}
export default Header;