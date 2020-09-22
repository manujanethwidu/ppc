import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'

import SLTLDBConnection from '../apis/SLTLDBConnection'
import scalConnection from '../apis/scalConnection'
import { useDispatch, useSelector } from 'react-redux'
import { scaleReading } from '../redux/scale/scaleActions'

function Timer(fn, t) {
     var timerObj = setInterval(fn, t);

     this.stop = function () {
          if (timerObj) {
               clearInterval(timerObj);
               timerObj = null;
          }
          return this;
     }

     // start timer using current settings (if it's not already running)
     this.start = function () {
          if (!timerObj) {
               this.stop();
               timerObj = setInterval(fn, t);
          }
          return this;
     }

     // start with new or original interval, stop current interval
     this.reset = function (newT = t) {
          t = newT;
          return this.stop().start();
     }
}

const TireBuilderScreen = () => {
     const scale = useSelector(state => state.scaleData)

     const [sWgt, setSWgt] = useState(0)
     const [scaleWgt, setScaleWgt] = useState("No Connection")
     const [finalWgt, setFinalWgt] = useState()
     const [btnHid, setBtnHid] = useState(true)
     const [time, setTime] = useState(0)
     const dispatch = useDispatch()

     var { reading } = scale
     useEffect(() => {
          try {
               scale.reading &&
                    scale.reading && setScaleWgt(scale.reading.reading.reading.substring(3, 11))
               scale.reading && setSWgt(Number(scale.reading.reading.reading.substring(4, 9)))
          } catch (error) {

          }
     }, [scale])

     useEffect(() => {
          setBtnHid(true)
          setTimeout(() => {
               setBtnHid(false)
          }, 3000);

     }, [sWgt])

     useEffect(() => {
          try {
               setInterval(async () => {
                    dispatch(scaleReading())
               }, 5000);
          } catch (e) {
               console.log(e);
          }
     }, [])


     var timer = new Timer(function () {


          var date = new Date();
          date.setSeconds(date); // specify value for SECONDS here
          var result = date.toISOString().substr(11, 8);
          console.log(result);
     }, 5000);

     const startHandler = () => {
          timer.start();
     }

     //Close the slide bar
     useEffect(() => {
          document.querySelector('.sidebar').classList.remove('open');
     }, [])
     return (
          <>
               <div className="grid-container-builder">

                    <header className="header-builder">

                         <input className="builder-scale-reading" value={scaleWgt} />
                         <input className="builder-scale-reading" value={sWgt}></input>

                    </header>
                    <main className='main-builder'>
                         <div className="">{time}</div>
                         <div> <button onClick={startHandler} >Start</button></div>
                         <div> <button >Stop</button></div>
                         <div> <button >Reset</button></div>
                    </main>
                    <footer className='footer-builder'>
                         footer
                    </footer>
               </div>
          </>
     )
}

export default TireBuilderScreen
