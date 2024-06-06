import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

const GlobalContext = createContext();
const base_url = "https://aniwatch-api-v1-0.onrender.com/api";

//Actions
const LOADING = "LOADING...";
const SEARCH = "SEARCH";
const GET_HOMEPAGE_DATA = "GET_HOMEPAGE_DATA";

//Reducer
const reducer = (state, action) => {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case SEARCH:
            return {
                ...state,
                isSearch: true,
                searchResults: action.payload,
            };
        case GET_HOMEPAGE_DATA:
            return {
                ...state,
                homepageData: action.payload,
                loading: false,
            };
        default:
            return state;
    }
    return state;

};

export const GlobalContextProvider = ({children}) => {
    
    // Initial State
    const initialState = {
        homepageData: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const [search, setSearch] = useState("");

    //Handle Change


    //Handle Submit



    // Fetch popular Anime
    const getHomepageData = async () => {
        dispatch({type: LOADING}) // No Data --> LOADING
        const response = await fetch(`${base_url}/parse`)
        const data = await response.json();
        console.log(data);
        console.log("TESTING...")
        dispatch({type: GET_HOMEPAGE_DATA, payload:data})
    };


    //initial render
    useEffect(() => {
        getHomepageData();
    }, [])

    return(
        <GlobalContext.Provider value={{
            ...state,
            getHomepageData,
        }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};