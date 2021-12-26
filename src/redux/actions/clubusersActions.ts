import axios from "axios"
import { Dispatch } from "redux"
import { computersGetAddress } from "../../constants"
import { ClubUserActions, ClubUserActionTypes, IClubUser } from "../types/clubuserTypes"
import { getTokenHeader } from "../../services/userAuthService"

export const getClubUsers = () => {
    return async (dispatch: Dispatch<ClubUserActions>) => {
        try {
            const token = getTokenHeader();
            dispatch({type: ClubUserActionTypes.START_FETCH_CLUBUSERS})
            const response = await axios.get<IClubUser[]>(computersGetAddress, {headers: { Authorization: `Bearer ${token.access_token}` }})
            dispatch({type: ClubUserActionTypes.SUCCESS_FETCH_CLUBUSERS, payload: response.data})
        } catch (error) {
            dispatch({type: ClubUserActionTypes.CATCH_ERROR_CLUBUSERS, payload: error.message})
        }
    }
}