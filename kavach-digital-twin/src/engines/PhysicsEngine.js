/**
 * ==========================================================
 * Physics Engine
 * Handles train movement.
 * ==========================================================
 */

class PhysicsEngine {

    constructor() {

        this.maxAcceleration = 0.8;      // m/s²
        this.maxBrake = 1.2;             // m/s²
        this.coastDeceleration = 0.05;

    }

    initialize(state) {

        state.train.acceleration = 0;

    }

    update(state, dt) {

        const train = state.train;

        switch (train.command) {

            case "ACCELERATE":

                train.acceleration = this.maxAcceleration;
                break;

            case "BRAKE":

                train.acceleration = -this.maxBrake;
                break;

            case "COAST":

            default:

                if (train.speed > 0)

                    train.acceleration = -this.coastDeceleration;

                else

                    train.acceleration = 0;

        }

        train.speed += train.acceleration * dt;

        if (train.speed < 0)

            train.speed = 0;

        train.position += train.speed * dt;

    }

    reset(state) {

        state.train.speed = 0;
        state.train.position = 0;
        state.train.acceleration = 0;

    }

}

export default PhysicsEngine;