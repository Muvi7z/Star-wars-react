import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { setLocalStorage } from "@utils/LocalStorage";
import rootReducer from "../reducers";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    setLocalStorage('store', store.getState().favoriteReducer);
})

export default store;