import React from 'react';
import styles from './styles/footer.module.css';


function Footer ({ str }) {
    const list = (e) => str(e);

    return  <div className={styles.main}>
                <div className={styles.nav}>
                    <ul>
                        <li onMouseUp={() => list(5)}>О нас</li>
                        <li onMouseUp={() => list(6)}>Контакты</li>
                        <li onMouseUp={() => list(7)}>Реклама</li>
                        <li onMouseUp={() => list(8)}>Карьера</li>
                        <li onMouseUp={() => list(9)}>Предложения</li>
                    </ul>
                </div>
            </div>

}
export default Footer;