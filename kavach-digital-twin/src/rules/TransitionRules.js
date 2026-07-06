import Modes from "./ModeDefinitions";

const TransitionRules = [

    //---------------------------------
    // Highest Priority
    //---------------------------------

    {

        from: "*",

        to: Modes.ISOLATION,

        condition: state => state.isolation.active

    },

    {

        from: "*",

        to: Modes.SYSTEM_FAILURE,

        condition: state => state.failure.active

    },

    //---------------------------------
    // StandBy
    //---------------------------------

    {

        from: Modes.STANDBY,

        to: Modes.STAFF_RESPONSIBLE,

        condition: state =>

            state.train.missionStarted

    },

    //---------------------------------
    // SR -> LS
    //---------------------------------

    {

        from: Modes.STAFF_RESPONSIBLE,

        to: Modes.LIMITED_SUPERVISION,

        condition: state =>

            state.movementAuthority.available

    },

    //---------------------------------
    // LS -> FS
    //---------------------------------

    {

        from: Modes.LIMITED_SUPERVISION,

        to: Modes.FULL_SUPERVISION,

        condition: state =>

            state.signal.aspect === "GREEN"

    },

    //---------------------------------
    // Any -> TRIP
    //---------------------------------

    {

        from: "*",

        to: Modes.TRIP,

        condition: state =>

            state.trip.active

    },

    //---------------------------------
    // Reverse
    //---------------------------------

    {

        from: "*",

        to: Modes.REVERSE,

        condition: state =>

            state.train.direction === "REVERSE"

    }

];

export default TransitionRules;