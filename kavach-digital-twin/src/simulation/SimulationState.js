const SimulationState = {

    train: {

        id: "TRAIN-001",

        position: 0,

        speed: 0,

        acceleration: 0,

        direction: "FORWARD",

        command: "COAST",

        mode: "SB",

        missionStarted: false,

        permittedSpeed: 0,

        targetSpeed: 0

    },

    signal: {

        id: null,

        aspect: "RED",

        distance: Infinity

    },

    movementAuthority: {

    available: false,

    targetSpeed: 0,

    staticSpeedLimit: 0,

    endOfAuthority: 0,

    remainingDistance: 0

},

    track: {

    currentObjects: [],

    currentRFID: null,

    nextSignal: null,

    bridges: [],

    tunnels: [],

    axleCounters: [],

    pointMachines: [],

    levelCrossings: []

},

    trip: {

        active: false

    },

    failure: {

        active: false

    },

    isolation: {

        active: false

    },

    speedSupervisor: {

    warning: false,

    serviceBrake: false,

    emergencyBrake: false

},

safety: {

    emergencyBrake: false,

    serviceBrake: false,

    reason: ""

},

    events: []

};

export default SimulationState;