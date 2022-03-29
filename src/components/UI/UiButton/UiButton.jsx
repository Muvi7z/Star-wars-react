import styles from './UiButton.module.css';
import propTypes from 'prop-types';
import classNames from 'classnames';


const UiButton = ({text, onClick, disabled, theme='dark', classes}) => {
    return (
        <button
            disabled={disabled} 
            onClick={onClick} 
            className={classNames(styles.button, styles[theme], classes)}>
            {text}
        </button>
    )
}

UiButton.propTypes = {
    text: propTypes.string,
    onClick: propTypes.func,
    disabled: propTypes.bool,
    theme: propTypes.string,
}

export default UiButton;