import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Favorite.module.css';
import icon from './img/bookmark.png'

const Favorite = () => {
    const [count,setCount] = useState();

    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const len = Object.keys(storeData).length;
        console.log('Loop?');
        len.toString().length > 2 ? setCount('...') : setCount(len);
    })
    
    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img src={icon} className={styles.icon} alt="Favorite" />
            </Link>

        </div>
    )
}

export default Favorite;