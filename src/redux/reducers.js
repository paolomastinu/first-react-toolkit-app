import {combineReducers} from "@reduxjs/toolkit"
import counter from "./reducers/counter/counter"

const combinedReducers = combineReducers({
    counter
})

export default combinedReducers