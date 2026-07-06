import useSimulation from "../../hooks/useSimulation";

export default function MovementAuthority(){

const {simulation}=useSimulation();

return(

<div style={{

padding:15,

border:"2px solid white"

}}>

<h2>Movement Authority</h2>

<h1>

{simulation.movementAuthority} m

</h1>

</div>

)

}