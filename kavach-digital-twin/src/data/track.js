/**
 * ==========================================================
 * KAVACH Track Layout
 * Demo Layout
 * ==========================================================
 */

const track = [

    // -----------------------------
    // RFID Tags
    // -----------------------------

    {
        id: "RFID_001",
        type: "RFID",
        position: 100
    },

    {
        id: "RFID_002",
        type: "RFID",
        position: 500
    },

    {
        id: "RFID_003",
        type: "RFID",
        position: 900
    },

    // -----------------------------
    // Signals
    // -----------------------------

    {
        id: "SIG_001",
        type: "SIGNAL",
        position: 300,
        aspect: "GREEN"
    },

    {
        id: "SIG_002",
        type: "SIGNAL",
        position: 800,
        aspect: "YELLOW"
    },

    {
        id: "SIG_003",
        type: "SIGNAL",
        position: 1400,
        aspect: "RED"
    },

    // -----------------------------
    // Bridge
    // -----------------------------

    {
        id: "BRIDGE_001",
        type: "BRIDGE",
        position: 1200
    },

    // -----------------------------
    // Tunnel
    // -----------------------------

    {
        id: "TUNNEL_001",
        type: "TUNNEL",
        position: 1700
    },

    // -----------------------------
    // Axle Counter
    // -----------------------------

    {
        id: "AXLE_001",
        type: "AXLE_COUNTER",
        position: 2100
    },

    // -----------------------------
    // Point Machine
    // -----------------------------

    {
        id: "POINT_001",
        type: "POINT_MACHINE",
        position: 2500
    },

    // -----------------------------
    // Level Crossing
    // -----------------------------

    {
        id: "LC_001",
        type: "LEVEL_CROSSING",
        position: 2900
    }

];

export default track;