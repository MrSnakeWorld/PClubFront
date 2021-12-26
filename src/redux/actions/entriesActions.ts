import axios from "axios"
import { Dispatch } from "redux"
import { userEntriesGetAddress } from "../../constants"
import { getTokenHeader } from "../../services/userAuthService"
import { EntryActions, EntryActionTypes, IEntry } from "../types/entryTypes"

export const getUserEntries = () => {
    return async (dispatch: Dispatch<EntryActions>) => {
        try {
            const token = getTokenHeader();
            dispatch({type: EntryActionTypes.START_FETCH_ENTRIES})
            const response = await axios.get<IEntry[]>(userEntriesGetAddress,  {headers: { Authorization: `Bearer ${token.access_token}` }})
            dispatch({type: EntryActionTypes.SUCCESS_FETCH_ENTRIES, payload: response.data})
        } catch (error) {
            dispatch({type: EntryActionTypes.CATCH_ERROR_ENTRIES, payload: (error as Error).message})
        }
    }
}