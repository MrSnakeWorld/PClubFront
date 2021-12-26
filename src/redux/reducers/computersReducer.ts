import { ComputerActions, ComputerActionTypes, ComputerState } from "../types/computerTypes"

const initialState: ComputerState = {
    items: [],
    loading: false,
    error: null
}

export const computersReducer = (state = initialState, action: ComputerActions): ComputerState => {
    switch (action.type) {
        case ComputerActionTypes.START_FETCH_COMPUTERS:
            return {...state, loading: true}
        case ComputerActionTypes.CATCH_ERROR_COMPUTERS:
            return {...state, loading: false, error: action.payload}
        case ComputerActionTypes.SUCCESS_FETCH_COMPUTERS:
            return {...state, loading: false, items: action.payload}
        default:
            return state;
    }
}