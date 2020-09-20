import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'

import SLTLDBConnection from '../apis/SLTLDBConnection'
import scalConnection from '../apis/scalConnection'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../redux/product/productActions';
import { scaleReading } from '../redux/scale/scaleActions'


const TireBuilderScreen = () => {

     const [scaleWgt, setScaleWgt] = useState(0)
     setScaleWgt(45)
     //Redux Scale
     const dispatch = useDispatch()
     useEffect(() => {
          dispatch(scaleReading())
     }, [])




     // useEffect(() => {
     //      try {
     //           setInterval(async () => {

     //           }, 1000);
     //      } catch (e) {
     //           console.log(e);
     //      }
     // }, [])



     //Close the slide bar
     useEffect(() => {
          document.querySelector('.sidebar').classList.remove('open');
     }, [])
     return (
          <>
               <div className="grid-container-builder">
                    <header className="header-builder">

                         <input className="builder-scale-reading" value={scaleWgt} />

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
