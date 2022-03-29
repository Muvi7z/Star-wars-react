import { HTTP, HTTPS, SWAPI_ROOT,SWAPI_PEOPLE, 
    URL_IMG_PERSON, 
    GUIDE_EXTENSION, SWAPI_PEOPLE_PARAMS} from "@constants/consts";

const checkProtocol = (url) => {
    if(url.indexOf(HTTPS) !==-1){
        return HTTPS;
    }
    return HTTP;
}

export const getPeoplePageId = url => {
    const pos = url.lastIndexOf(SWAPI_PEOPLE_PARAMS)
    const id = url.slice(pos+SWAPI_PEOPLE_PARAMS.length)
    
    return Number(id)
}

const getId = (url, category) => {
    const protocol = checkProtocol(url);
    const id = url
        .replace(HTTPS+SWAPI_ROOT+category, '')
        .replace(/\//g,'')
    return id;
}

export const getPeopleIdByUrl = (url) => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_EXTENSION}`;