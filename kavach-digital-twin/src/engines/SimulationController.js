/**
 * ==========================================================
 * Simulation Controller
 * Connects React with the Simulation Engine.
 * ==========================================================
 */

import SimulationEngine from "./SimulationEngine";

import PhysicsEngine from "./PhysicsEngine";
import TrackEngine from "./TrackEngine";
import SignalEngine from "./SignalEngine";
import MovementAuthorityEngine from "./MovementAuthorityEngine";
import SpeedSupervisor from "./SpeedSupervisionEngine";
import SafetyEngine from "./SafetyEngine";
import ModeEngine from "./ModeEngine";
import EventEngine from "./EventEngine";

class SimulationController {

    constructor() {

        this.engine = new SimulationEngine();

        this.engine.register(new PhysicsEngine());
        this.engine.register(new TrackEngine());
        this.engine.register(new SignalEngine());
        this.engine.register(new MovementAuthorityEngine());
        this.engine.register(new SpeedSupervisor());
        this.engine.register(new SafetyEngine());
        this.engine.register(new ModeEngine());
        this.engine.register(new EventEngine());

    }

    initialize(state) {

        this.engine.initialize(state);

    }

    start() {

        this.engine.start();

    }

    stop() {

        this.engine.stop();

    }

    tick(state) {

        this.engine.tick(state);

        return state;

    }

}

const controller = new SimulationController();

export default controller;