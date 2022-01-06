import React from 'react';
import styles from './styles/list.module.css';

function List ({ items, onClick }) {

    const handleNameChange = (num) => {
        console.log(num)
        onClick(num)
    } 

    let listItems = items.map(num => 
        <div key={num.id} className={styles.itemCont} onClick={() => handleNameChange(num)}>
            <img src={num.src} className={styles.image}/>
            <div className={styles.info}>
                <div className={styles.name}>{num.name} {num.year}</div>
                <div className={styles.prices}>
                    <p>{num.price} $</p>
                    <p><span>&middot; </span> {num.price * 27.25} грн</p>
                </div>
                <div className={styles.secInfo}>
                    <div><img src="data:image/svg+xml,%3C%3Fxml%20version='1.0'%20encoding='UTF-8'%3F%3E%3Csvg%20fill='none'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle%20cx='7.5'%20cy='7.5'%20r='7'%20stroke='%23DB5C4C'/%3E%3Ccircle%20cx='7.5'%20cy='7.5'%20r='1'%20stroke='%23DB5C4C'/%3E%3Cpath%20d='m8.5%206.5%202-2'%20stroke='%23DB5C4C'/%3E%3Cpath%20d='m7.5%200.5v1.5m-7%205.5h1.5m12.5%200h-1.5m-10.5-5%201%201m9-1-1%201'%20stroke='%23DB5C4C'/%3E%3C/svg%3E%0A" alt="" />{num.mileage}</div>
                    <div><img src="data:image/svg+xml,%3C%3Fxml%20version='1.0'%20encoding='UTF-8'%3F%3E%3Csvg%20fill='none'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle%20cx='8'%20cy='6'%20r='2.5'%20stroke='%23DB5C4C'/%3E%3Cpath%20d='m13.5%206c0%202.321-1.4052%204.7061-2.8904%206.5627-0.73381%200.9172-1.4688%201.6829-2.0206%202.2194-0.23486%200.2284-0.43598%200.4146-0.58896%200.5528-0.15297-0.1382-0.3541-0.3244-0.58896-0.5528-0.55183-0.5365-1.2868-1.3022-2.0206-2.2194-1.4852-1.8566-2.8904-4.2417-2.8904-6.5627%200-3.0376%202.4624-5.5%205.5-5.5%203.0376%200%205.5%202.4624%205.5%205.5z'%20stroke='%23DB5C4C'/%3E%3C/svg%3E%0A" alt="" />{num.location}</div>
                    <div><img src="data:image/svg+xml,%0A<svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 6.5V10.5M5.5 6.5H9.5M5.5 6.5L4.5 5.5M5.5 10.5H9.5M5.5 10.5L4.5 11.5M9.5 10.5V6.5M9.5 10.5L10.5 11.5M9.5 6.5L10.5 5.5' stroke='%23DB5C4C' stroke-linecap='round'/><path d='M1.5 13V6.53553C1.5 5.87249 1.76339 5.23661 2.23223 4.76777L3.76777 3.23223C4.23661 2.76339 4.87249 2.5 5.53553 2.5H10C10.8284 2.5 11.5 1.82843 11.5 1V0.5H12C12.8284 0.5 13.5 1.17157 13.5 2V13C13.5 13.8284 12.8284 14.5 12 14.5H3C2.17157 14.5 1.5 13.8284 1.5 13Z' stroke='%23DB5C4C'/><path d='M11.5 0.5H8C7.17157 0.5 6.5 1.17157 6.5 2V2.5' stroke='%23DB5C4C'/><path d='M0.5 3.5L2.5 1.5' stroke='%23DB5C4C' stroke-linecap='round'/></svg>%0A" alt="" />{num.fuel}</div>
                    <div><img src="data:image/svg+xml,%0A%3Csvg%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Crect%20x='0.5'%20y='0.5'%20width='14'%20height='14'%20rx='7'%20stroke='%23DB5C4C'/%3E%3Cpath%20d='M3.81543%2011L6.83936%203.12598H7.96191L11.1846%2011H9.99756L9.0791%208.61523H5.78662L4.92188%2011H3.81543ZM6.0874%207.7666H8.75684L7.93506%205.58594C7.68441%204.9235%207.49821%204.37923%207.37646%203.95312C7.2762%204.45801%207.13477%204.95931%206.95215%205.45703L6.0874%207.7666Z'%20fill='%23DB5C4C'/%3E%3C/svg%3E%0A" alt="" />{num.transmission}</div>
                </div> 
                <div className={styles.thInfoCont}>
                    <div className={styles.thInfo}>
                        <div className={styles.accident}>{num.accident? "Був в ДТП" : "Не був в ДТП"}</div>
                        <div className={styles.date}><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%3E%3Cpath%20d='M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z%20M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7%20S11.9,15,8,15z'%20fill='%239b9b9b'%3E%3C/path%3E%3Cpath%20d='M8,5.5C8,5.2,7.8,5,7.5,5S7,5.2,7,5.5V9h4.5C11.8,9,12,8.8,12,8.5S11.8,8,11.5,8H8V5.5z'%20fill='%239b9b9b'%3E%3C/path%3E%3C/svg%3E" alt="" />{num.date}</div>
                    </div>
                    <div className={styles.icons}>
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='compare' width='34' height='20' viewBox='0 0 34 20'%3E%3Cpath d='M10 13C10 15.8 7.8 18 5 18 2.2 18 0 15.8 0 13 2 13 8 13 10 13Z' fill='%23256799'%3E%3C/path%3E%3Cpath d='M26 13C26 15.8 23.8 18 21 18 18.2 18 16 15.8 16 13 18 13 24 13 26 13Z' fill='%23256799'%3E%3C/path%3E%3Cpath d='M15 2C14 2 12 2 11 2 11 .9 11.9 0 13 0 14.1 0 15 .9 15 2Z' fill='%23256799'%3E%3C/path%3E%3Cpath d='M21 2H5V3H21V2Z' fill='%23256799'%3E%3C/path%3E%3Cpath d='M9 12 5.4 3H4.6L1 12H0L4 2H6L10 12H9Z' fill='%23256799'%3E%3C/path%3E%3Cpath d='M25 12 21.4 3H20.6L17 12H16L20 2H22L26 12H25Z' fill='%23256799'%3E%3C/path%3E%3C/svg%3E" alt="" />
                        <img src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 3L14.9389 8.95492L21.5106 9.90983L16.7553 14.5451L17.8779 21.0902L12 18L6.12215 21.0902L7.24472 14.5451L2.48944 9.90983L9.06107 8.95492L12 3Z' stroke='%23256799' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E%0A" alt="" />
                    </div>
                </div>
            </div>
    </div>
);
   return listItems;
}

export default List;