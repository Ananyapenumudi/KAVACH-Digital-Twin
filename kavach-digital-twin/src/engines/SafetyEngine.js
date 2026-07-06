/**
 * ==========================================================
 * Safety Engine
 * Applies safety actions.
 * ==========================================================
 */

class SafetyEngine {

    initialize(state) {

        state.safety = {

            emergencyBrake: false,

            serviceBrake: false,

            reason: ""

        };

    }

    update(state) {

        const safety = state.safety;

        const supervisor = state.speedSupervisor;

        safety.emergencyBrake = false;
        safety.serviceBrake = false;
        safety.reason = "";

        //----------------------------------
        // Overspeed
        //----------------------------------

        if (supervisor.serviceBrake) {

            safety.serviceBrake = true;

            safety.reason = "Overspeed";

            state.train.command = "BRAKE";

        }

        //----------------------------------
        // Emergency Overspeed
        //----------------------------------

        if (supervisor.emergencyBrake) {

            safety.emergencyBrake = true;

            safety.reason = "Emergency Overspeed";

            state.train.command = "BRAKE";

        }

        //----------------------------------
        // End Of Authority
        //----------------------------------

        if (

            state.movementAuthority.remainingDistance <= 0 &&

            state.train.speed > 0

        ) {

            safety.emergencyBrake = true;

            safety.reason = "EOA Reached";

            state.train.command = "BRAKE";

        }

        //----------------------------------
        // Trip Mode
        //----------------------------------

        if (state.trip.active) {

            safety.emergencyBrake = true;

            safety.reason = "Trip Mode";

            state.train.command = "BRAKE";

        }

    }

    reset(state) {

        state.safety.emergencyBrake = false;

        state.safety.serviceBrake = false;

        state.safety.reason = "";

    }

}

export default SafetyEngine;