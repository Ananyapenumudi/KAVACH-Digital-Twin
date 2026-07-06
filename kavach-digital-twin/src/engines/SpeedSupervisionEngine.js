/**
 * ==========================================================
 * Speed Supervisor
 * Supervises train speed against permitted speed.
 * ==========================================================
 */

class SpeedSupervisor {

    constructor() {

        this.warningMargin = 5;      // km/h
        this.serviceMargin = 2;      // km/h
        this.emergencyMargin = 8;    // km/h

    }

    initialize(state) {

        state.speedSupervisor = {

            warning: false,

            serviceBrake: false,

            emergencyBrake: false

        };

    }

    update(state) {

        const train = state.train;

        const permitted = train.permittedSpeed;

        const supervisor = state.speedSupervisor;

        supervisor.warning = false;
        supervisor.serviceBrake = false;
        supervisor.emergencyBrake = false;

        if (train.speed >= permitted - this.warningMargin &&
            permitted > 0) {

            supervisor.warning = true;

        }

        if (train.speed > permitted + this.serviceMargin) {

            supervisor.serviceBrake = true;

        }

        if (train.speed > permitted + this.emergencyMargin) {

            supervisor.emergencyBrake = true;

        }

    }

    reset(state) {

        state.speedSupervisor.warning = false;
        state.speedSupervisor.serviceBrake = false;
        state.speedSupervisor.emergencyBrake = false;

    }

}

export default SpeedSupervisor;