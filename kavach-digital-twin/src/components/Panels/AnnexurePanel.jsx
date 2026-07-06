import useSimulation from "../../hooks/useSimulation";

export default function AnnexurePanel() {
    const { simulation } = useSimulation();

    return (
        <div className="annexure-panel">
            <h3>Annexure A1</h3>

            <p>
                <strong>Current Mode:</strong> {simulation.train?.mode || "SB"}
            </p>

            <p>
                Mode transition information will appear here.
            </p>
        </div>
    );
}