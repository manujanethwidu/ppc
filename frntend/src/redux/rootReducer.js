import {combineReducers} from 'redux'
import tireDetailReducer from './tireDetails/tireDetailReducer'
import cakeReducer from './cake/cakeReducer'
import isAuthReducer from './isAuthonticated/isAuthReducer'


const rootReducer = combineReducers({
    tireDetails:tireDetailReducer,
    cakeReducer,
    isAuthReducer
})


export default rootReducer