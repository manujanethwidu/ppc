import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'

import SLTLDBConnection from '../apis/SLTLDBConnection'
import scalConnection from '../apis/scalConnection'
import { useDispatch, useSelector } from 'react-redux'
import { scaleReading } from '../redux/scale/scaleActions'


const TireBuilderScreen = () => {
     const scale = useSelector(state => state.scaleData)

     const [sWgt,setSWgt] = useState(0)
     const [scaleWgt, setScaleWgt] = useState("No Connection")
     const[finalWgt,setFinalWgt] = useState()
     const dispatch = useDispatch()

     var { reading } = scale
     useEffect(() => {
          try {
               scale.reading &&
               scale.reading && setScaleWgt(scale.reading.reading.reading.substring(3, 11))
               scale.reading &&   setSWgt(scale.reading.reading.reading.substring(4, 9))
          } catch (error) {
               alert(
                 'ASDF'
            )   
          }
     }, [scale])


     useEffect(() => {
          try {
               setInterval(async () => {
                    dispatch(scaleReading())
               }, 500);
          } catch (e) {
               console.log(e);
          }
     }, [])




     //Close the slide bar
     useEffect(() => {
          document.querySelector('.sidebar').classList.remove('open');
     }, [])
     return (
          <>
               <div className="grid-container-builder">
                    <header className="header-builder">

                         <input className="builder-scale-reading" value={scaleWgt} />
                         <input className="builder-scale-reading" value = {sWgt}></input>

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
