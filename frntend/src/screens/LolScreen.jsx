import React, { useEffect } from 'react'

const LolScreen = () => {
     const closeMenu = () => {
          document.querySelector('.sidebar').classList.remove('open');
        };
     useEffect(() => {
          closeMenu()
     },[])
     return (
          <div>
               LolScreen
          </div>
     )
}

export default LolScreen
