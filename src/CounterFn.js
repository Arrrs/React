import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import sss from '../assets/images/q.jfif';
import { func } from 'prop-types';
import styles from './styles/counterFn.module.css'

function CounterFn({max}) {
    let [clicks, setClicks] = useState(0);
    let items = () => (clicks < max) ? setClicks(clicks + 1) : null;
    let itemsNull = () => (clicks >= 0) ? setClicks(clicks - 1) : null;
    let sss = "../assets/images/q.jfif";
    function changeChacker (value) {
        setClicks(value)
    }
    function blurChecker (value) {
        if (value <= items && value > 0) {
            setClicks(value)
        } else if (value > 5) {
            setClicks(5)
        } else if (value < 0 || isNaN(value) || value == '') {
            setClicks(0)
        }  
    }
    function focusChecker (value) {
        if (value == 0) {
            setClicks('')
        }
    }
    return (
        <div>
            <button className={styles.countBox} onClick={itemsNull} disabled={clicks <= 0}> - </button>
            <input type="text" value={clicks} onChange={e => changeChacker(e.target.value)} onFocus={e => focusChecker(e.target.value)} onBlur={e => blurChecker(e.target.value)}/>
            <img src={sss} alt="" />
            <button onClick={items} disabled={clicks >= max}> + </button>
        </div>
    )
}

CounterFn.propTypes = {
    clicks: PropTypes.number
}

export default CounterFn;