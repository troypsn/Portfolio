import React from 'react'
import Navbar from './components/Navbar';
import background from '../public/assets/background.jpg'
import Welcome from './components/Welcome';
import Dock from './components/Dock';
import { useRef } from "react";
import gsap from "gsap";




function App() {


  const blurRef = useRef(null);


  return ( 
    <main>
      <img
          src={background}
          alt=""
          className="absolute inset-0 h-full w-full object-cover z-0" style={{ position: 'fixed' }}
        />
      
      <div className="relative h-screen w-full overflow-hidden">
        

    
          <Navbar />
          
          <Welcome/>

          <Dock/>
      
          
          
      </div>

      

     
      
    </main>
  )
}


export default App;