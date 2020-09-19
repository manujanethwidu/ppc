import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from "./productConstants"
import axios from 'axios';
import SLTLDBConnection from '../../apis/SLTLDBConnection'
   
   const listProducts = () => async (dispatch) => {
     try {
       dispatch({ type: PRODUCT_LIST_REQUEST });
       const { data } = await SLTLDBConnection.get(`/get_tiredetails_frm_sn/200104568`)
       dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
     }
     catch (error) {
       dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
     }
   }
   
   export { listProducts }