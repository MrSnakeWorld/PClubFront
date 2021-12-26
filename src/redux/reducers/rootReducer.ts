import { combineReducers } from "redux"
import { clubusersReducer } from "./clubusersReducer"
import {computersReducer} from "./computersReducer"
import { entriesReducer } from "./entriesReducer"

export const rootReducer = combineReducers({
    computers: computersReducer,
    clubUsers: clubusersReducer,
    entries: entriesReducer
})

export type RootState = ReturnType<typeof rootReducer>