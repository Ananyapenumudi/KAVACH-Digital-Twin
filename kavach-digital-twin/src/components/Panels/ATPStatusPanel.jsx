import useSimulation from "../../hooks/useSimulation";
import "./";

export default function ATPStatusPanel() {

    const { simulation } = useSimulation();

    const train = simulation.train;
    const ma = simulation.movementAuthority;
    const signal = simulation.signal;
    const track = simulation.track;

    return (

        <div className="atp-panel">

            <h2>ATP Information</h2>

            <div className="status-grid">

                <div>Movement Authority</div>
                <div>{ma.remainingDistance} m</div>

                <div>Permitted Speed</div>
                <div>{train.permittedSpeed} km/h</div>

                <div>Target Speed</div>
                <div>{train.targetSpeed} km/h</div>

                <div>Distance to EOA</div>
                <div>{ma.remainingDistance} m</div>

                <div>Signal Aspect</div>
                <div>{signal.aspect}</div>

                <div>Next RFID</div>
                <div>

                    {track.currentRFID ?

                        track.currentRFID.id

                        :

                        "--"}

                </div>

                <div>Train Position</div>
                <div>{Math.round(train.position)} m</div>

                <div>Brake Status</div>
                <div>

                    {simulation.safety.emergencyBrake

                        ?

                        "Emergency"

                        :

                        simulation.safety.serviceBrake

                        ?

                        "Service"

                        :

                        "Released"}

                </div>

            </div>

        </div>

    );

}