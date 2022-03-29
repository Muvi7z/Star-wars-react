import styles from './PersonPhoto.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE} from '@constants/consts'
import { addPersonFavorite, removePersonFavorite } from '../../../redux/actions';
import iconFavoriteFill from './img/favorite.png'
import iconFavorite from './img/favorite-white.png'

const PersonPhoto = ({
    personPhoto,
    personName,
    personId,
    personFavorite,
    setPersonFavorite
}) => {
    const dispatch = useDispatch();

    const dispatchFavoritePerson = () => {
        if(! personFavorite){
            dispatch(addPersonFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto,
                }
            }));
            setPersonFavorite(true)
        }else{
            dispatch(removePersonFavorite(personId));
            setPersonFavorite(false)
        }
    }
    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
                <img 
                src={personFavorite ? iconFavoriteFill : iconFavorite} 
                alt="add/remove"
                className={styles.favorite}
                onClick={dispatchFavoritePerson}
             />  
            </div>
                     
        </>
        
    )
}

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
}

export default PersonPhoto;