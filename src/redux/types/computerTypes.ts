export interface IComputer {
    id: number,
    name: string,
    cpu: string,
    gpu: string,
    ram: string,
    storage: string,
    monitor: string,
    mouse: string,
    keypad: string,
    earphones: string,
    webcamera: string
}

export interface ComputerState {
    items: IComputer[],
    loading: boolean,
    error: string | null,
}

export enum ComputerActionTypes {
    START_FETCH_COMPUTERS = "START_FETCH_COMPUTERS",
    CATCH_ERROR_COMPUTERS = "CATCH_ERROR_COMPUTERS",
    SUCCESS_FETCH_COMPUTERS = "SUCCESS_FETCH_COMPUTERS"
}

interface StartFetchComputers {
    type: ComputerActionTypes.START_FETCH_COMPUTERS,
}

interface ErrorFetchComputers {
    type: ComputerActionTypes.CATCH_ERROR_COMPUTERS,
    payload: string
}

interface SuccessFetchComputers {
    type: ComputerActionTypes.SUCCESS_FETCH_COMPUTERS,
    payload: IComputer[]
}

export type ComputerActions = StartFetchComputers 
    | ErrorFetchComputers 
    | SuccessFetchComputers