import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'

import SLTLDBConnection from '../apis/SLTLDBConnection'
import scalConnection from '../apis/scalConnection'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../redux/product/productActions';


const TireBuilderScreen = () => {
     
     const productList = useSelector(state => state.productList)
     const { products, loading, error } = productList
     const dispatch = useDispatch()
   

     useEffect(() => {
          dispatch(listProducts())
        }, [])


     const sn = ":200104568"
     const [tireDetilsNew, setTireDeatailsNew] = useState({})

       //Fetch Data of sn
       useEffect(() => {
         const fetchData = async () => {
             try {
                 const response = await scalConnection.get(`/scale`)
                 const tireDetails = response.data.data
                 setTireDeatailsNew(tireDetails)
             } catch (err) {
                 const errMsg = err.message
             }
         };
         fetchData();
     }, []);
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
