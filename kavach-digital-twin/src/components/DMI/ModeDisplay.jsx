import useSimulation from "../../hooks/useSimulation";

export default function ModeDisplay(){

const {simulation}=useSimulation();

return(

<div style={{

padding:15,

border:"2px solid white"

}}>

<h2>Mode</h2>

<h1>

{simulation.currentMode}

</h1>

</div>

)

}