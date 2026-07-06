import "./../styles/simulation.css";

import { SimulationProvider } from "../context/SimulationContext";

import DMIScreen from "../components/DMI/DMIScreen";

import RailwayCanvas from "../components/Railway/RailwayCanvas";

import EventLog from "../components/Panels/EventLog";

import ScenarioPanel from "../components/Panels/ScenarioPanel";

import ModeTimeline from "../components/Panels/ModeTimeline";

import AnnexurePanel from "../components/Panels/AnnexurePanel";

import TransitionPanel from "../components/Panels/TransitionPanel";

import ATPStatusPanel from "../components/Panels/ATPStatusPanel";

export default function Simulation() {

    return (

        <SimulationProvider>

            <div className="simulation-page">

                <header className="header">

                    <h1>KAVACH Digital Twin Simulator</h1>

                </header>

                <section className="top-panel">

                    <div className="dmi-panel">

                        <DMIScreen />

                    </div>

                    <div className="status-panel">

                        <StatusPanel />

                    </div>

                </section>

                <section className="railway-panel">

                    <RailwayCanvas />

                </section>

                <section className="bottom-panel">

                    <div className="event-panel">

                        <EventLog />

                    </div>

                    <div className="scenario-panel-wrapper">

                        <ScenarioPanel />

                    </div>

                </section>

                <section className="footer-panel">

                    <ModeTimeline />

                    <AnnexurePanel />

                    <TransitionPanel />

                </section>

            </div>

        </SimulationProvider>

    );

}