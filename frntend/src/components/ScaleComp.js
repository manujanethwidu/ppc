import React from 'react'

const ScaleComp = ({scaleWgt,sWgt}) => {
   
     return (
          <div>
               <input className="builder-scale-reading" value={scaleWgt} readOnly />
               <input className="builder-scale-reading" value={sWgt} readOnly></input>
          </div>
     )
}

export default ScaleComp
