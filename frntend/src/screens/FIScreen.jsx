import React,{useEffect} from 'react'
import ListView from '../components/fi/ListView';

const FIScreen = () => {
     const closeMenu = () => {
          document.querySelector('.sidebar').classList.remove('open');
     };
     useEffect(() => {
          closeMenu()
     }, [])
     return (
          <div>
              <ListView/>
          </div>
     )
}

export default FIScreen
