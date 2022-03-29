import { useSelector } from 'react-redux';
import styles from './FavoritePage.module.css';
import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import PeopleList from '@components/PeopleList/PeopleList';



const FavoritePage = () => {
    const storeData = useSelector(state => state.favoriteReducer);

    const [people, setPeople] = useState([]);
    useEffect(() => {
        const arr = Object.entries(storeData);
        if(arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })
            setPeople(res)
        }
    }, [])
    
    return (
        <div>
            <h1 className='header__text'>Favorites</h1>
            {people.length
                ? <PeopleList people={people} />
                : <h1 className={styles.comment}>No data</h1>
            }
        </div>
    )
}


export default FavoritePage;