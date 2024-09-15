import { SET_SEARCH_TERM_EMPTY } from "../actions/searchActions";

const searchReducer = (state = "", action) => {
    switch (action.type) {
        case "SET_SEARCH_TERM":
            return {
                ...state,
                searchTerm: action.searchTerm,
            };
        case "SET_SEARCH_TERM_EMPTY":
            return {
                ...state,
                seartchTerm: "",
            };
        default:
            return state;
    }
};

export default searchReducer;