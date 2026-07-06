import "./styles.css";

import Gauge from "./Gauge";
import SpeedArc from "./SpeedArc";
import TickMarks from "./TickMarks";
import SpeedLabels from "./SpeedLabels";
import SpeedMarkers from "./SpeedMarkers";
import SpeedNeedle from "./SpeedNeedle";
import CentreHub from "./CentreHub";
import DigitalSpeed from "./DigitalSpeed";
import SpeedText from "./SpeedText";

import useSimulation from "../../../hooks/useSimulation";

export default function Speedometer() {

    const { simulation } = useSimulation();

    return (

        <div className="speedometer">

            <svg
                viewBox="0 0 400 400"
                className="speedometer-svg"
            >

                <Gauge />

                <SpeedArc />

                <TickMarks />

                <SpeedLabels />

                <SpeedMarkers
                    permitted={simulation.train.permittedSpeed}
                    target={simulation.train.targetSpeed}
                />

                <SpeedNeedle
                    speed={simulation.train.speed}
                />

                <CentreHub />

                <DigitalSpeed
                    speed={simulation.train.speed}
                />

                <SpeedText />

            </svg>

        </div>

    );

}