class EventEngine {

    constructor() {

        this.lastMode = null;

        this.lastSignal = null;

    }

    initialize() {}

    update(state) {

        //---------------------------------

        // Mode Change

        //---------------------------------

        if (

            this.lastMode !==

            state.train.mode

        ) {

            state.events.unshift({

                type: "MODE",

                message:

                    `Mode -> ${state.train.mode}`,

                time: Date.now()

            });

            this.lastMode =

                state.train.mode;

        }

        //---------------------------------

        // Signal Change

        //---------------------------------

        if (

            this.lastSignal !==

            state.signal.aspect

        ) {

            state.events.unshift({

                type: "SIGNAL",

                message:

                    `Signal -> ${state.signal.aspect}`,

                time: Date.now()

            });

            this.lastSignal =

                state.signal.aspect;

        }

        //---------------------------------

        // Brake

        //---------------------------------

        if (

            state.safety.emergencyBrake

        ) {

            state.events.unshift({

                type: "BRAKE",

                message:

                    "Emergency Brake",

                time: Date.now()

            });

        }

        while (

            state.events.length > 200

        ) {

            state.events.pop();

        }

    }

    reset(state) {

        state.events = [];

    }

}

export default EventEngine;