
import SLTLDBConnection from '../../apis/SLTLDBConnection'

import {
    FETCH_TIREDETAILS_REQUEST,
    FETCH_TIREDETAILS_SUCCESS,
    FETCH_TIREDETAILS_FAILURE,
} from './tireDetailTypes'

export const fetchTireDetailRequest = () => {
    return {
        type: FETCH_TIREDETAILS_REQUEST
    }
}

export const fetchTireDetailSuccess = (tireDetails) => {
    return {
        type: FETCH_TIREDETAILS_SUCCESS,
        payload: tireDetails
    }
}

export const fetchTireDetailFailure = (error) => {
    return {
        type: FETCH_TIREDETAILS_FAILURE,
        payload: error
    }
}

export const fetchTireDetails = (sn) => {
   
    return (dispatch) => {
        dispatch(fetchTireDetailRequest)
        SLTLDBConnection.get(`/get_tiredetails_frm_sn/${sn}`)
       
            .then(response => {
                const tireDetails = response.data.data
            
                dispatch(fetchTireDetailSuccess(tireDetails))
            })
            .catch(error => {
                const errMsg = error.message
                dispatch(fetchTireDetailFailure(errMsg))
            })
    }
}

//const response = await SLTLDBConnection.get(`/get_tiredetails_frm_sn/${sn.substr(1)}`)// : mark i