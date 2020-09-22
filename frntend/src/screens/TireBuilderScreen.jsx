import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'

import SLTLDBConnection from '../apis/SLTLDBConnection'
import scalConnection from '../apis/scalConnection'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../redux/product/productActions';
import { scaleReading } from '../redux/scale/scaleActions'


const TireBuilderScreen = () => {
     const scale = useSelector(state => state.scaleData)
     const [scaleWgt, setScaleWgt] = useState(5)
     const dispatch = useDispatch()

     var { reading } = scale
     useEffect(() => {
          scale.reading && setScaleWgt(scale.reading.reading.reading.substring(3, 9))
          // console.log( scale.reading &&  Number(scale.reading.reading.reading.substring(1, 9)));
          console.log(scale.reading && (scale.reading.reading.reading.substring(1, 9)));
        
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
