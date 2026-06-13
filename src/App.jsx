import React from 'react'
import Navbar from './components/Navbar';
import background from './assets/background.jpg'
import Welcome from './components/Welcome';
import { useRef } from "react";
import gsap from "gsap";


function App() {
  const blurRef = useRef(null);

  const showBlur = () => {
    gsap.to(blurRef.current, {
      opacity: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const hideBlur = () => {
    gsap.to(blurRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <main>
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={background}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          onPointerDown={showBlur}
          onPointerUp={hideBlur}
        />

        <img
          ref={blurRef}
          src={background}
          alt=""
          className="absolute inset-0 h-full w-full object-cover blur-xl opacity-0 pointer-events-none"
        />

        

          
          <Navbar />
          <Welcome/>
      </div>
    </main>
  )
}


export default App;