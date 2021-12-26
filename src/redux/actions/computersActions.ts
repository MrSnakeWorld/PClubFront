import axios from "axios"
import { Dispatch } from "redux"
import { ComputerActions, ComputerActionTypes, IComputer } from "../types/computerTypes"
import {computersGetAddress} from "../../constants/index"
import { getTokenHeader } from "../../services/userAuthService"

export const getComputers = () => {
    return async (dispatch: Dispatch<ComputerActions>) => {
        try {
            const token = getTokenHeader();
            dispatch({type: ComputerActionTypes.START_FETCH_COMPUTERS})
            const response = await axios.get<IComputer[]>(computersGetAddress, {headers: { Authorization: `Bearer ${token.access_token}` }})
            dispatch({type: ComputerActionTypes.SUCCESS_FETCH_COMPUTERS, payload: response.data})
        } catch (error) {
            dispatch({type: ComputerActionTypes.CATCH_ERROR_COMPUTERS, payload: error.message})
        }
    }
}
