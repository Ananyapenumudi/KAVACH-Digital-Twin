import SignalLamp from "./SignalLamp";
import useSimulation from "../../../hooks/useSimulation";

export default function SignalDisplay(){

    const {simulation}=useSimulation();

    return(

        <div className="signal-body">

            <SignalLamp
                color="RED"
                active={simulation.signalAspect==="RED"}
            />

            <SignalLamp
                color="YELLOW"
                active={simulation.signalAspect==="DOUBLE_YELLOW" || simulation.signalAspect==="YELLOW"}
            />

            <SignalLamp
                color="DOUBLE_YELLOW"
                active={simulation.signalAspect==="DOUBLE_YELLOW"}
            />

            <SignalLamp
                color="GREEN"
                active={simulation.signalAspect==="GREEN"}
            />

        </div>

    )

}