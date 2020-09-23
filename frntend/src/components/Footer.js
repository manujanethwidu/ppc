import React from 'react'


function msToTime(s) {
     var ms = s % 1000;
     s = (s - ms) / 1000;
     var secs = s % 60;
     s = (s - secs) / 60;
     var mins = s % 60;
     var hrs = (s - mins) / 60;

     return mins + ':' + secs;
}

const Footer = ({ stblTimeOut }) => {

     const t = 500



     if (stblTimeOut < 0) {
          var stblTimeOutcss = 'sbleTimeOut-1'

     }else
     if (stblTimeOut < t * 1) {
          stblTimeOutcss = 'sbleTimeOut-2'
     }else
     if (stblTimeOut < t * 2) {
          stblTimeOutcss = 'sbleTimeOut-3'
     } else
     if (stblTimeOut < t * 3) {
          stblTimeOutcss = 'sbleTimeOut-4'
     }else
     if (stblTimeOut < t * 4) {
          stblTimeOutcss = 'sbleTimeOut-5'
     }else
     if (stblTimeOut < t * 5) {
          stblTimeOutcss = 'sbleTimeOut-6'
     }else
     if (stblTimeOut < t * 6) {
          stblTimeOutcss = 'sbleTimeOut-7'
     }else
     if (stblTimeOut < t * 7) {
          stblTimeOutcss = 'sbleTimeOut-8'
     }else
     if (stblTimeOut < t * 8) {
          stblTimeOutcss = 'sbleTimeOut-9'
     }else
     if (stblTimeOut < t * 9) {
          stblTimeOutcss = 'sbleTimeOut-10'
     }else
     if (stblTimeOut < t * 10) {
          stblTimeOutcss = 'sbleTimeOut-11'
     }
     
     if (stblTimeOut > t * 10) {
          stblTimeOutcss = 'sbleTimeOut-ok'
     }
   



     return (
          <div>
               <div className={stblTimeOutcss}>
                    {msToTime(stblTimeOut)}
                  
               </div>
          </div>
     )
}

export default Footer
