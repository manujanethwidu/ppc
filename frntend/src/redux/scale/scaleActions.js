import axios from 'axios';
import scalConnection from '../../apis/scalConnection'

const scaleReading = () => async (dispatch) => {
     try {
          dispatch({ type: SCALE_READING_REQUEST });
          const {data} = await scalConnection.get(`/scale`)
          dispatch({type:SCALE_READING_SUCCESS,payload:data})
     } catch (error) {
          dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
     }
}