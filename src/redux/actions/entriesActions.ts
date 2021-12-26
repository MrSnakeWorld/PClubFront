import axios from "axios"
import { Dispatch } from "redux"
import { userEntriesGetAddress, allEntriesGetAddress, entriesByComputerGetAddress, createEntryAddress, userDeleteEntryAddress } from "../../constants"
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

export const getAllEntries = () => {
    return async (dispatch: Dispatch<EntryActions>) => {
        try {
            const token = getTokenHeader();
            dispatch({type: EntryActionTypes.START_FETCH_ENTRIES})
            const response = await axios.get<IEntry[]>(allEntriesGetAddress,  {headers: { Authorization: `Bearer ${token.access_token}` }})
            dispatch({type: EntryActionTypes.SUCCESS_FETCH_ENTRIES, payload: response.data})
        } catch (error) {
            dispatch({type: EntryActionTypes.CATCH_ERROR_ENTRIES, payload: (error as Error).message})
        }
    }
}

export const getEntriesByComputerId = (computerId: number) => {
    return async (dispatch: Dispatch<EntryActions>) => {
        try {
            const token = getTokenHeader();
            dispatch({type: EntryActionTypes.START_FETCH_ENTRIES})
            const response = await axios.get<IEntry[]>(userEntriesGetAddress + computerId,  {headers: { Authorization: `Bearer ${token.access_token}` }})
            dispatch({type: EntryActionTypes.SUCCESS_FETCH_ENTRIES, payload: response.data})
        } catch (error) {
            dispatch({type: EntryActionTypes.CATCH_ERROR_ENTRIES, payload: (error as Error).message})
        }
    }
}

export interface ICreateEntryRequest {
    visitStartDateTime: Date
    visitEndDateTime: Date,
    computerId: number
  }

export const createEntry = (request: ICreateEntryRequest) => {
    return async (dispatch: Dispatch<EntryActions>) => {
        const token = getTokenHeader();
        await axios.post(createEntryAddress, request, {headers: { Authorization: `Bearer ${token.access_token}` }});
    }
}

export const userDeleteEntry = (entryId: number) => {
    return async (dispatch: Dispatch<EntryActions>) => {
        const token = getTokenHeader();
        await axios.delete(userDeleteEntryAddress + entryId, {headers: { Authorization: `Bearer ${token.access_token}` }});
    }
}

export const adminDeleteEntry = (entryId: number) => {
    return async (dispatch: Dispatch<EntryActions>) => {
        const token = getTokenHeader();
        await axios.delete(createEntryAddress + entryId, {headers: { Authorization: `Bearer ${token.access_token}` }});
    }
}