import { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';

import PeopleList from '@components/PeopleList/PeopleList';
import { getApiResource, changeHTTP } from '@utils/network'
import { getPeopleIdByUrl, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/consts';

import styles from './PeoplePage.module.css';
import { useQueryParams } from '@hooks/useQueryParams';
import PeopleNavigation from '@components/PeopleNavigation';

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResource = async (url) => {
        const res = await getApiResource(url);

        
        if( res){
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleIdByUrl(url);
                const img = getPeopleImage(id);
                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList);
            setNextPage(changeHTTP(res.next));
            setPrevPage(changeHTTP(res.previous));
            setCounterPage(getPeoplePageId(url))
        }
        setErrorApi(!res)
    }
    useEffect(() => {
        getResource(API_PEOPLE+queryPage);
    }, []);

    return (
        <>
            <PeopleNavigation getResource={getResource} nextPage={nextPage} prevPage={prevPage} counterPage={counterPage}/>
            {people && <PeopleList people={people} />}
        </>
    )
}
PeoplePage.propTypes = {
    setErrorApi: propTypes.func
        
}

export default withErrorApi(PeoplePage);