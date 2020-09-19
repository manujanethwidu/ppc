import {
    FETCH_TIREDETAILS_REQUEST,
    FETCH_TIREDETAILS_SUCCESS,
    FETCH_TIREDETAILS_FAILURE,

} from './tireDetailTypes'


const initialState = {
    loading: false,
    tireDetails: {},
    error: ''
}

const tireDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TIREDETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TIREDETAILS_SUCCESS:
            return {
                loading: false,
                tireDetails: action.payload,
                error: ''
            }
        case FETCH_TIREDETAILS_FAILURE:
            return {
                loading: false,
                tireDetails: [],
                error: action.payload
            }


        default: return state
    }
}

export default tireDetailReducer