import { FETCH_FAVOURITES, POST_FAVOURITES } from "../actions/types";

const initialState = {
    favourites: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_FAVOURITES:
            return {
                ...state,
                favourites: action.payload
            };

        case POST_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            };

        default:
            return state;
    }
}