import styles from './ChooseSide.module.css';
import propTypes from 'prop-types';
import { THEME_DARK, THEME_LIGHT, THEME_SOLO, useTheme } from '@context/ThemeProvider';
import imgDarkSide from './img/dark-side.jpg'
import imgLightSide from './img/light-side.jpg'
import imgLight from './img/lightsaber.jpg'
import imgSoloSide from './img/falcon.jpg'
import cn from 'classnames';

const ChooseSideItem = ({ classes, theme, img, text }) => {
    const isTheme = useTheme();
    return (
        <div 
            className={cn(styles.item,classes)} 
            onClick={() => isTheme.change(theme)}>
            <div className={styles.item__header}>{text}</div>
            <img src={img} alt={text} className={styles.item__img}/>
        </div>
    )
}

ChooseSideItem.propTypes = {
    classes: propTypes.string,
    theme: propTypes.string,
    img: propTypes.string,
    text: propTypes.string,
}

const ChooseSide = () => {
    const elements = [
        {
            classes: styles.item__light,
            theme: THEME_LIGHT,
            text: 'Light side',
            img: imgLight
        },
        {
            classes: styles.item__dark,
            theme: THEME_DARK,
            text: 'Dark side',
            img: imgDarkSide
        },
        {
            classes: styles.item__solo,
            theme: THEME_SOLO,
            text: "I'm Han Solo",
            img: imgSoloSide
        },
    ]

    return (
        <div className={styles.container}>
            {elements.map(({theme, text, img, classes}, index) => (
                <ChooseSideItem 
                    key={index} 
                    theme={theme} 
                    text={text} 
                    img={img}
                    classes={classes}
                />
                
            ))}
        </div>
    )
}

ChooseSide.propTypes = {
    
}

export default ChooseSide;