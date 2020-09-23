import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { scaleReading } from '../redux/scale/scaleActions'
import Footer from '../components/Footer'



const TireBuilderScreen = () => {
     const scale = useSelector(state => state.scaleData)

     const [sWgt, setSWgt] = useState(0)
     const [scaleWgt, setScaleWgt] = useState("No Connection")
     const [finalWgt, setFinalWgt] = useState()
     const [stable, setStable] = useState(false)
     const [stblTimeOut, setStblTimeOut] = useState(0)





     const dispatch = useDispatch()
     var { reading } = scale

     useEffect(() => {
          try {
               scale.reading &&
                    scale.reading && setScaleWgt(scale.reading.reading.reading.substring(3, 11))
               scale.reading && setSWgt(Number(scale.reading.reading.reading.substring(4, 9)))
               const lr = JSON.parse(localStorage.getItem("cr"))

               const sto = { reading: sWgt, time: Date.now() }
               if (lr.reading !== sWgt) {
                    localStorage.setItem("cr", JSON.stringify(sto))
               }
               if ((Date.now() - lr.time) > 5000) {
                    setStable(true)
               }
               setStblTimeOut((Date.now() - lr.time))

          } catch (error) {

          }
     }, [scale])


     useEffect(() => {
          try {
               setInterval(async () => {
                    dispatch(scaleReading())
               }, 300);
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

                         <input className="builder-scale-reading" value={scaleWgt} readOnly />
                         <input className="builder-scale-reading" value={sWgt} readOnly></input>

                    </header>
                    <main className='main-builder'>

                    </main>
                    <footer className='footer-builder'>
                         <Footer stblTimeOut={stblTimeOut} />
                    </footer>
               </div>
          </>
     )
}

export default TireBuilderScreen
