import React, { useEffect } from 'react'
import {  useDispatch } from 'react-redux';



const TireBuilderScreen = () => {
   
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
