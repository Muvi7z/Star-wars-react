import styles from './Header.module.css';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Favorite from '../Favorite';
import { THEME_DARK, THEME_LIGHT, THEME_SOLO, useTheme } from '@context/ThemeProvider';
import imgDark from './img/dark.png'
import imgLight from './img/light.png'
import imgDroid from './img/droid.png'
import { useEffect, useState } from 'react';

const Header = () => {
    const [icon, setIcon] = useState(imgDark);
    const isTheme = useTheme();
    
    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT:
                setIcon(imgLight);
                break;
            case THEME_DARK:
                setIcon(imgDark);
                break;
            case THEME_SOLO:
                setIcon(imgDroid);
                break;
            default:
                setIcon(imgDark);
                break;
        }

    }, [isTheme]);

    return (
        <div className={styles.container}>
            <img src={icon} alt="logo" className={styles.logo}/>
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/not-found">NotFound</NavLink></li>
                <li><NavLink to="/fail">Fail</NavLink></li>
            </ul>		
            <Favorite />	
        </div>
    )
}

Header.propTypes = {
    
}

export default Header;