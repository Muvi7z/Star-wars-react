import styles from './NotFoundPage.module.css';
import img from './img/404.png'
import { useLocation } from 'react-router';

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <>
            <img className={styles.img} src={img} alt="Not found 404" />
            <p className={styles.text}>No match for <u>{location.pathname}</u></p>
        </>
    )
}

export default NotFoundPage;