import React, { useEffect, useState } from 'react'
import FtrComp from '../components/fi/FtrComp'
import SLTLDBConnection from '../apis/SLTLDBConnection'

//Toastify
import {notifyInfo,notifyWarning,notifyError,notifySuccess} from '../utils/toastify'

const FTRScreen = ({ match,userData }) => {
     const [tireDetails, setTireDeatails] = useState([])
     const sn = match.params.sn
     //Fetch data
     const fetchDataSN = async () => {
          try {
               // const response = await SLTLDBConnection.get(`/get_tiredetails_of_given_noof_dates_back_frm_mfg_tbl/1/${val}`)
               //getFilterd100Tires
               //getLast100Tires
               const response = await SLTLDBConnection.get(`/get_tiredetails_filterd_sntext/${sn}`)

               setTireDeatails(response.data.data[0])
          } catch (err) {
               console.error(err.message)
          }
     }
     useEffect(() => {
          fetchDataSN()
     }, [])
     return (
          <div>
               <FtrComp tireDetails={tireDetails} userData={userData} />
          </div>
     )
}

export default FTRScreen
