import styles from './PersonPage.module.css';
import propTypes from 'prop-types';
import { Outlet, useParams } from 'react-router';
import { getApiResource } from '@utils/network';
import React, { useEffect, useState, Suspense } from 'react';
import { API_PERSON } from '@constants/consts';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleImage } from '@services/getPeopleData';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack/PersonLinkBack';
import UiLoading from '@components/UI/UiLoading';
import { useSelector } from 'react-redux';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))

const PersonPage = ( {setErrorApi} ) => {
    const storeData = useSelector(state => state.favoriteReducer);

    const { id } = useParams();
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    useEffect(() => {
       (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            setPersonFavorite(storeData[id] ? true : false)
            
            if(res){
                setPersonInfo([
                    { title: 'Height', data: res.height},
                    { title: 'Mass', data: res.mass},
                    { title: 'Hair Color', data: res.hair_color},
                    { title: 'Skin Color', data: res.skin_color},
                    { title: 'Eye Color', data: res.eye_color},
                    { title: 'Birth Year', data: res.birth_year},
                    { title: 'Gender', data: res.gender},
                ])
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))

                res.films.length && setPersonFilms(res.films)
            }
            setErrorApi(!res);
       })();
    },[]);
    
    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto personId={id} 
                        personPhoto={personPhoto} 
                        personName={personName} 
                        personFavorite={personFavorite} 
                        setPersonFavorite={setPersonFavorite} 
                    />
                    { personInfo && (
                        <PersonInfo personInfo={personInfo}/>
                    )}
                    { personFilms &&  (
                        <Suspense fallback={<UiLoading theme="white"/>}>
                            <PersonFilms personFilms={personFilms}/>
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: propTypes.func,
}
export default withErrorApi(PersonPage);