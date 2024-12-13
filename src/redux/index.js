import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter'
import userReducer from './users'
export default configureStore({
    reducer:{
        counter:counterReducer,
        users:userReducer,

    }
})       