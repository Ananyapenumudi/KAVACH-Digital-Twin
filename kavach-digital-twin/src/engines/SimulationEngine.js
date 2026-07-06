/**
 * ==========================================================
 * KAVACH Simulation Engine
 * Master engine of the simulator.
 * ==========================================================
 */

import Clock from "../simulation/Clock";
import Scheduler from "../simulation/Scheduler";

class SimulationEngine {

    constructor() {

        this.clock = new Clock();

        this.scheduler = new Scheduler();

        this.running = false;

    }

    register(engine) {

        this.scheduler.add(engine);

    }

    initialize(state) {

        this.clock.reset();

        this.running = false;

        this.scheduler.tasks.forEach(engine => {

            if (engine.initialize) {

                engine.initialize(state);

            }

        });

    }

    start() {

        this.running = true;

    }

    stop() {

        this.running = false;

    }

    pause() {

        this.running = false;

    }

    resume() {

        this.running = true;

    }

    tick(state) {

        if (!this.running) return;

        const dt = this.clock.tick();

        this.scheduler.run(state, dt);

    }

}

export default SimulationEngine;