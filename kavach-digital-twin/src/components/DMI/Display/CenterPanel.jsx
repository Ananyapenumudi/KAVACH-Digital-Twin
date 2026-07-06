import StatusCard from "./StatusCard";
import InfoRow from "./InfoRow";
import useSimulation from "../../../hooks/useSimulation";

export default function CenterPanel() {

    const { simulation } = useSimulation();

    return (

        <div>

            <StatusCard
                title="Current Mode"
                value={simulation.currentMode}
            />

            <InfoRow
                label="Permitted Speed"
                value={`${simulation.permittedSpeed} km/h`}
            />

            <InfoRow
                label="Target Speed"
                value={`${simulation.targetSpeed} km/h`}
            />

            <InfoRow
                label="Movement Authority"
                value={`${simulation.movementAuthority} m`}
            />

            <InfoRow
    label="Distance to EOA"
    value={`${simulation.distanceToEOA} m`}
/>

            <StatusCard
                title="Driver Message"
                value={simulation.driverMessage}
            />

        </div>

    );

}