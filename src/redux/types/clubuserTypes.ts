export interface IClubUser {
    firstName: string,
    secondName: string,
    email: string,
    phoneNumber: string
}

export interface ClubUserState {
    items: IClubUser[],
    loading: boolean,
    error: string | null,
}

export enum ClubUserActionTypes {
    START_FETCH_CLUBUSERS = "START_FETCH_CLUBUSERS",
    CATCH_ERROR_CLUBUSERS = "CATCH_ERROR_CLUBUSERS",
    SUCCESS_FETCH_CLUBUSERS = "SUCCESS_FETCH_CLUBUSERS"
}

interface StartFetchClubUser {
    type: ClubUserActionTypes.START_FETCH_CLUBUSERS,
}

interface ErrorFetchClubUser {
    type: ClubUserActionTypes.CATCH_ERROR_CLUBUSERS,
    payload: string
}

interface SuccessFetchClubUser {
    type: ClubUserActionTypes.SUCCESS_FETCH_CLUBUSERS,
    payload: IClubUser[]
}

export type ClubUserActions = StartFetchClubUser 
    | ErrorFetchClubUser 
    | SuccessFetchClubUser