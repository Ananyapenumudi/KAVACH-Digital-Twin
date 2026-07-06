/**
 * ==========================================================
 * Signal Engine
 * Handles signal detection and updates.
 * ==========================================================
 */

import track from "../data/track";

class SignalEngine {

    initialize(state) {

        state.signal = {

            id: null,
            aspect: "RED",
            distance: Infinity

        };

    }

    update(state) {

        const trainPos = state.train.position;

        let nearestSignal = null;

        let nearestDistance = Infinity;

        track.forEach(object => {

            if (object.type !== "SIGNAL") return;

            const distance = object.position - trainPos;

            if (distance >= 0 && distance < nearestDistance) {

                nearestDistance = distance;

                nearestSignal = object;

            }

        });

        if (nearestSignal) {

            state.signal.id = nearestSignal.id;

            state.signal.aspect = nearestSignal.aspect;

            state.signal.distance = nearestDistance;

        }

    }

    reset(state) {

        state.signal.id = null;

        state.signal.aspect = "RED";

        state.signal.distance = Infinity;

    }

}

export default SignalEngine;