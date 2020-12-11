import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from './profileReducer'
import {loginReducer} from './loginReducer'
import {registrationReducer} from './registarationReducer'
import {recoveryReducer} from './recoveryReducer'
import {passwordReducer} from './passwordReducer'
import thunk from 'redux-thunk'

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profile: profileReducer,
    login: loginReducer,
    registration: registrationReducer,
    recovery: recoveryReducer,
    password: passwordReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));