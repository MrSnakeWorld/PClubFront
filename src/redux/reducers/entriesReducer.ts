import { EntryActions, EntryActionTypes, EntryState } from "../types/entryTypes"

const initialState: EntryState = {
    items: [],
    loading: false,
    error: null
}

export const entriesReducer = (state = initialState, action: EntryActions): EntryState => {
    switch (action.type) {
        case EntryActionTypes.START_FETCH_ENTRIES:
            return {...state, loading: true}
        case EntryActionTypes.CATCH_ERROR_ENTRIES:
            return {...state, loading: false, error: action.payload}
        case EntryActionTypes.SUCCESS_FETCH_ENTRIES:
            return {...state, loading: false, items: action.payload}
        default:
            return state;
    }
}