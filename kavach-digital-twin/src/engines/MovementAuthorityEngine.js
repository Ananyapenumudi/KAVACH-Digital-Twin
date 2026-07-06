/**
 * ==========================================================
 * Movement Authority Engine
 * Calculates MA and EOA.
 * ==========================================================
 */

class MovementAuthorityEngine {

    initialize(state) {

        state.movementAuthority.available = false;

    }

    update(state) {

        const signal = state.signal;

        const ma = state.movementAuthority;

        //------------------------------------------
        // MA Calculation
        //------------------------------------------

        switch (signal.aspect) {

            case "GREEN":

                ma.available = true;

                ma.targetSpeed = 110;

                ma.staticSpeedLimit = 110;

                ma.endOfAuthority = state.train.position + 3000;

                break;

            case "DOUBLE_YELLOW":

                ma.available = true;

                ma.targetSpeed = 60;

                ma.staticSpeedLimit = 60;

                ma.endOfAuthority = state.train.position + 1500;

                break;

            case "YELLOW":

                ma.available = true;

                ma.targetSpeed = 30;

                ma.staticSpeedLimit = 30;

                ma.endOfAuthority = state.train.position + 800;

                break;

            case "RED":

            default:

                ma.available = false;

                ma.targetSpeed = 0;

                ma.staticSpeedLimit = 0;

                ma.endOfAuthority = state.signal.distance;

        }

        //------------------------------------------
        // Remaining MA
        //------------------------------------------

        ma.remainingDistance =

            Math.max(

                0,

                ma.endOfAuthority - state.train.position

            );

        //------------------------------------------
        // Permitted Speed
        //------------------------------------------

        state.train.permittedSpeed =

            ma.targetSpeed;

    }

    reset(state) {

        state.movementAuthority.available = false;

    }

}

export default MovementAuthorityEngine;