export interface IEntry {
    id: number,
    visitStartDateTime: string,
    visitEndDateTime: string,
    computerId: 0,
    clubUserId: string,
}

export interface EntryState {
    items: IEntry[],
    loading: boolean,
    error: string | null,
}

export enum EntryActionTypes {
    START_FETCH_ENTRIES = "START_FETCH_ENTRIES",
    CATCH_ERROR_ENTRIES = "CATCH_ERROR_ENTRIES",
    SUCCESS_FETCH_ENTRIES = "SUCCESS_FETCH_ENTRIES"
}

interface StartFetchEntry {
    type: EntryActionTypes.START_FETCH_ENTRIES,
}

interface ErrorFetchEntry {
    type: EntryActionTypes.CATCH_ERROR_ENTRIES,
    payload: string
}

interface SuccessFetchEntry {
    type: EntryActionTypes.SUCCESS_FETCH_ENTRIES,
    payload: IEntry[]
}

export type EntryActions = StartFetchEntry 
    | ErrorFetchEntry 
    | SuccessFetchEntry