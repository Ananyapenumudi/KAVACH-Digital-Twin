import useSimulation from "../../hooks/useSimulation";

export default function DriverMessage(){

const {simulation}=useSimulation();

return(

<div style={{

padding:15,

border:"2px solid white",

flex:1

}}>

<h2>Driver Message</h2>

{simulation.driverMessage}

</div>

)

}