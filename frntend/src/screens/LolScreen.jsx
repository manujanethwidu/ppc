import React, { useEffect } from 'react'

const LolScreen = () => {
     const closeMenu = () => {
          document.querySelector('.sidebar').classList.remove('open');
        };
     useEffect(() => {
          closeMenu()
     },[])
     return (
          <div className="parent">
            
               <section className="section-1"></section>
               <section className="section-2">
                    <div class='move-me'></div>
               </section>
          </div>
     )
}

export default LolScreen
