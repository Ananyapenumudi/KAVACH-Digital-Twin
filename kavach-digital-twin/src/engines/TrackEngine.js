/**
 * ==========================================================
 * Track Engine
 * Detects nearby railway objects.
 * ==========================================================
 */
import track from "../data/track";

class TrackEngine {

    constructor() {

    this.trackObjects = track;

}

    initialize(state) {

        state.track.currentObjects = [];

    }

    update(state) {

        const trainPos = state.train.position;

        state.track.currentObjects = [];

        let nearestRFID = null;
        let nearestSignal = null;

        this.trackObjects.forEach(object => {

            const distance = object.position - trainPos;

            if (Math.abs(distance) <= 50) {

                state.track.currentObjects.push({

                    ...object,

                    distance

                });

            }

            switch (object.type) {

                case "RFID":

                    if (

                        nearestRFID === null ||

                        Math.abs(distance) < Math.abs(nearestRFID.distance)

                    ) {

                        nearestRFID = {

                            ...object,

                            distance

                        };

                    }

                    break;

                case "SIGNAL":

                    if (

                        nearestSignal === null ||

                        distance < nearestSignal.distance

                    ) {

                        if (distance >= 0) {

                            nearestSignal = {

                                ...object,

                                distance

                            };

                        }

                    }

                    break;

                default:

                    break;

            }

        });

        state.track.currentRFID = nearestRFID;

        state.track.nextSignal = nearestSignal;

    }

    reset(state) {

        state.track.currentObjects = [];

        state.track.currentRFID = null;

        state.track.nextSignal = null;

    }

}

export default TrackEngine;