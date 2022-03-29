import styles from './PeopleNavigation.module.css';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton/UiButton';

const PeopleNavigation = ({
    getResource,
    nextPage,
    prevPage,
    counterPage
}) => {
    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);
    return (
        <div className={styles.container}>
            <Link to={`/people/?page=${counterPage-1}`} className={styles.buttons}>
                <UiButton text='Previous' onClick={handleChangePrev} disabled={!prevPage}/>
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={styles.buttons}>
                <UiButton text='Next'  disabled={!nextPage} onClick={handleChangeNext} />
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResource: propTypes.func,
    nextPage: propTypes.string,
    prevPage: propTypes.string,
    counterPage: propTypes.number,
    
}

export default PeopleNavigation;