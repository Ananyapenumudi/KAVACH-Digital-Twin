import useSimulation from "../../hooks/useSimulation";

export default function ModeTimeline() {

    const { simulation } = useSimulation();

    return (

        <div className="mode-timeline">

            <h3>Mode Timeline</h3>

            <div>

                <strong>Current Mode:</strong>

                {" "}

                {simulation.train?.mode || "SB"}

            </div>

            <div>

                <strong>Train Speed:</strong>

                {" "}

                {simulation.train?.speed || 0} km/h

            </div>

            <div>

                <strong>Permitted Speed:</strong>

                {" "}

                {simulation.train?.permittedSpeed || 0} km/h

            </div>

            <div>

                <strong>Target Speed:</strong>

                {" "}

                {simulation.train?.targetSpeed || 0} km/h

            </div>

        </div>

    );

}