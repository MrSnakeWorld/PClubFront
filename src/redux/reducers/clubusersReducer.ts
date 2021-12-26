import { ClubUserActions, ClubUserActionTypes, ClubUserState } from "../types/clubuserTypes"

const initialState: ClubUserState = {
    items: [],
    loading: false,
    error: null
}

export const clubusersReducer = (state = initialState, action: ClubUserActions): ClubUserState => {
    switch (action.type) {
        case ClubUserActionTypes.START_FETCH_CLUBUSERS:
            return {...state, loading: true}
        case ClubUserActionTypes.CATCH_ERROR_CLUBUSERS:
            return {...state, loading: false, error: action.payload}
        case ClubUserActionTypes.SUCCESS_FETCH_CLUBUSERS:
            return {...state, loading: false, items: action.payload}
        default:
            return state;
    }
}