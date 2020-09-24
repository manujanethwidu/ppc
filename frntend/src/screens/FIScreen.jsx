import React,{useEffect} from 'react'

const FIScreen = () => {
     const closeMenu = () => {
          document.querySelector('.sidebar').classList.remove('open');
     };
     useEffect(() => {
          closeMenu()
     }, [])
     return (
          <div>
               FI Screen
          </div>
     )
}

export default FIScreen
