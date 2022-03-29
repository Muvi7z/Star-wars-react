import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE} from '@constants/consts'

export const addPersonFavorite = (person) => ({
    type:  ADD_PERSON_TO_FAVORITE,
    payload: person
})
export const removePersonFavorite = (personId) => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: personId
})

//mobX