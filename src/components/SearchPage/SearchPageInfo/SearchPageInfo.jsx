import styles from './SearchPageInfo.module.css';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SearchPageInfo = ({people}) => {
    return (
        <>
            {people.length
                ? (
                    <ul className={styles.list__container}>
                        {people.map(({id, name, img}) => 
                            <li key={id} className={styles.list__item}>
                                <Link to={`/people/${id}`}>
                                    <img src={img} alt={name} className={styles.person__photo}/>
                                    <p className={styles.person__name}>{name}</p>
                                </Link>
                            </li>
                        )}
                    </ul>
                )
                : <h2 className={styles.person__comment}>No results</h2>
            }
        </>
    )
}

SearchPageInfo.propTypes = {
    people: propTypes.array
}

export default SearchPageInfo;