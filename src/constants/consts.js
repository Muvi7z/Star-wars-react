
//common
export const HTTPS = 'https://';
export const HTTP = 'http://';

//swapi
export const SWAPI_ROOT = 'swapi.dev/api/';
export const SWAPI_PEOPLE = 'people';
export const SWAPI_PEOPLE_PARAMS = '/?page=';
export const SWAPI_PARAM_SEARCH = '/?search=';

export const API_PEOPLE = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PEOPLE_PARAMS;
export const API_PERSON = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE;
export const API_SEARCH = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PARAM_SEARCH;

//vis guide

const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters';
export const GUIDE_EXTENSION = '.jpg';

export const URL_IMG_PERSON = GUIDE_ROOT_IMG+GUIDE_PEOPLE;

//redux

//Action type
export const ADD_PERSON_TO_FAVORITE = 'ADD_PERSON_TO_FAVORITE'
export const REMOVE_PERSON_FROM_FAVORITE = 'REMOVE_PERSON_FROM_FAVORITE'
