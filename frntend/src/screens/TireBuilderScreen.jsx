import React,{useEffect} from 'react'

const TireBuilderScreen = () => {
     const closeMenu = () => {
          document.querySelector('.sidebar').classList.remove('open');
        };
     useEffect(() => {
          closeMenu()
     },[])
     return (
          <>
               <div className="grid-container-builder">
                    <header className="header-builder">
                         header
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
