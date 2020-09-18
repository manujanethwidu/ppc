import React, { useEffect } from 'react'

const PpcScreen = () => {
     const closeMenu = () => {
          document.querySelector('.sidebar').classList.remove('open');
     };
     useEffect(() => {
          closeMenu()
     }, [])
     return (
          <div>
               PpcScreen
          </div>
     )
}
export default PpcScreen
