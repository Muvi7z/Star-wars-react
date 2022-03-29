import styles from './UiLoading.module.css';
import propTypes from 'prop-types';
import loaderBlack from './img/loader-black.svg'
import loaderBlue from './img/loader-blue.svg'
import loaderWhite from './img/loader-white.svg'
import { useEffect, useState } from 'react';
import cn from 'classnames';


const UiLoading = ({
    theme ="white",
    isSwadow=true,
    classes,
    }) => {

    useEffect(() => {
        switch (theme){
            case 'black': setLoaderIcon(loaderBlack); break;
            case 'white': setLoaderIcon(loaderWhite); break;
            case 'blue': setLoaderIcon(loaderBlue); break;
            default: setLoaderIcon(loaderWhite); break;
        }
    }, [])

    const [loaderIcon, setLoaderIcon] = useState(null);
    
    return (
        <img className={cn(styles.loader, isSwadow && styles.shadow, classes)} src={loaderIcon} alt="Loading..." />
    )
}

UiLoading.propTypes = {
    theme: propTypes.string,
    isSwadow: propTypes.bool,
    classes: propTypes.string,
}

export default UiLoading;