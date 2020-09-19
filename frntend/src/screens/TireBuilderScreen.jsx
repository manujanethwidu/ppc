import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTireDetails } from '../redux'
import SLTLDBConnection from '../apis/SLTLDBConnection'


const TireBuilderScreen = () => {
     const sn = ":200104568"
     const [tireDetilsNew, setTireDeatailsNew] = useState({})

     const tireSize = tireDetilsNew.tiresizebasic + " " + tireDetilsNew.lugtype + " " + tireDetilsNew.config + " " + tireDetilsNew.rimsize
     const snText = "SN:-" + tireDetilsNew.sn + '   PID:- ' + tireDetilsNew.pid
     const BnSw = tireDetilsNew.brand + ' ' + tireDetilsNew.swmsg
   
       //Fetch Data of sn
       useEffect(() => {
         const fetchData = async () => {
             try {
                 const response = await SLTLDBConnection.get(`/get_tiredetails_frm_sn/${sn.substr(1)}`)
                 const tireDetails = response.data.data
                 setTireDeatailsNew(tireDetails)
             } catch (err) {
                 const errMsg = err.message
             }
         };
         fetchData();
     }, []);
     //Close the slide bar
     useEffect(() => {
          document.querySelector('.sidebar').classList.remove('open');
     }, [])

    

     // useEffect(() => {
     //      try {
     //           setInterval(async () => {

     //           }, 1000);
     //      } catch (e) {
     //           console.log(e);
     //      }
     // }, [])
     return (
          <>
               <div className="grid-container-builder">
                    <header className="header-builder">

                         <input type="number" className="builder-scale-reading" />

                    </header>
                    <main className='main-builder'>
                         main
                    </main>
                    <footer className='footer-builder'>
                         footer
                    </footer>
               </div>
          </>
     )
}

export default TireBuilderScreen
