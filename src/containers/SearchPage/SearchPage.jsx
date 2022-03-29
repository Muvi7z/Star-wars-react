import styles from './SearchPage.module.css';
import propTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { getApiResource } from '@utils/network'
import { API_SEARCH } from '@constants/consts';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleIdByUrl, getPeopleImage } from '@services/getPeopleData';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo/SearchPageInfo';
import { debounce } from 'lodash';
import UiInput from '@ui/UiInput/UiInput';

const SearchPage = ({setErrorApi}) => {
    const [searchValue, setSearchValue] = useState('');
    const [people, setPeople] = useState([]);
    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH+param);
        console.log(param);
        if(res){
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleIdByUrl(url);
                const img = getPeopleImage(id);
                return {
                    id,
                    name,
                    img
                }
            });
            setPeople(peopleList);
        }
        setErrorApi(!res);
    }

    useEffect(() => {
        getResponse('');
    },[])
    const debounceGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
      []
    );
    
    const handleInputChange = (value) => {
        setSearchValue(value);
        debounceGetResponse(value);
    }
    return (
        <div>
            <h1 className='header__text'>Search</h1>

            <UiInput
                type="text"
                value={searchValue}
                handleInputChange={handleInputChange}
                placeholder="Введите имя персонажа"
                classes={styles.input__search}

            />
            <SearchPageInfo people={people}/>
        </div>
    )
}

SearchPage.propTypes = {
    setErrorApi: propTypes.func
}

export default withErrorApi(SearchPage);