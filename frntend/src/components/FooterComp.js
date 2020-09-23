import React from 'react'
import { msToTime, cssGetter } from '../utils/footerUtils'
import '../css/FooterComp.css';

const FooterComp = ({ stblTimeOut, stblTimeOutSetting }) => {

     const stblTimeOutcss = cssGetter(stblTimeOut, stblTimeOutSetting)

     return (
          <div className="footer-container">
               <div className="timer-container">
                    <div className={stblTimeOutcss} >
                         <h4 className="timeout-text">{msToTime(stblTimeOut)}</h4>
                    </div>
               </div>
               <div className="tire-code-container">
                    <input id="tire-code" type="number"></input>
               </div>
          </div>
     )
}

export default FooterComp
