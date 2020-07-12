import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import reducer from './reducers'

export default (preloadedState) => {

    const middleware = [
        ...getDefaultMiddleware({
            thunk: false,
            serializableCheck: false
        })
    ]

    const store = configureStore({
        reducer,
        middleware,
        preloadedState,
    })

    return store
}