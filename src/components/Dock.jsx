import { useRef } from "react"
import { dockApps } from "../constants";
import { Tooltip } from "react-tooltip";

function Dock() {
  const dockRef = useRef(null); 

  const toggleApp = (app) =>{
    // to do
  }

  return (
    <section id="dock">
        <div ref={dockRef} className="dock-container">
        {dockApps.map(({id, name, icon, canOpen})=>(
          <div key={id} className="relative flex justify-center"> 
            <button 
            type="button" 
            className="dock-icon"
            aria-label={name}
            data-tooltip-id="dock-tooltip"
            data-tooltip-content={name}
            data-tooltip-delay-show={150}
            disabled={!canOpen}
            onClick={()=>{toggleApp({id, canOpen})}}
            >
              <img 
              src={`./public/assets/${icon}`}
              alt={name}
              loading="lazy"
              className={(canOpen ? "" : "opacity-60") + "h-12 w-12"} 
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip"/>
        </div>

    </section>
  )
}

export default Dock