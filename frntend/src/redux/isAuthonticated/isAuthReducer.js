import { ISAUTH_SET } from './isAuthTypes'

const initialState = {
    isAutonticated:false
}



const isAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ISAUTH_SET: return {
            ...state,
            isAutonticated: action.payload
        }
        default: return state
    }
}

export default isAuthReducer


