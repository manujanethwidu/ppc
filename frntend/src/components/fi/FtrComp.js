import React from 'react'
import '../../css/FtrComp.css'
const FtrComp = ({ tireDetails }) => {
     const { tiresizebasic,
          lugtype,
          config,
          rimsize,
          tiretypecap,
          brand,
          swmsg,
          moldno

     } = tireDetails
     return (
          <div className=''>
               <div className='ftr-container'>
                    <div class="row">
                         <div className='tire-detail'>
                              {tiresizebasic} {lugtype} {config} {rimsize} {tiretypecap}
                              <br />
                              {brand} / {swmsg}
                              <br/>
                              MoldNo:-{moldno}
                         
                         </div>
                      
                         <div></div>
                         </div>
               <div class="row">
                    <div class="col-5 menu">
                         <ul>
                              <li>Thick Flash</li>
                              <li>The City</li>
                              <li>The Island</li>
                              <li>The Food</li>
                         </ul>
                    </div>
                    <div class="col-5 select">
                         <ul>
                              <li>
                                   <select>
                                        <option >5mm</option>
                                        <option >10mm</option>
                                        <option >15mm</option>
                                        </select>
                                        
                              </li>
                              <li>The City</li>
                              <li>The Island</li>
                              <li>The Food</li>
                         </ul>
                    </div>

               </div>
               <div class="row">

               </div>
         </div>
          </div>


     )
}

export default FtrComp
