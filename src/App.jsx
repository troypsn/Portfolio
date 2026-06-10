import React from 'react'
import Navbar from './components/Navbar';
import background from './assets/background.jpg'

function App (){
  return (
    <main>
       <div 
        className="h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }} // 2. 
      >
          
          <Navbar></Navbar>
      </div>
    </main>
  )
}


export default App;