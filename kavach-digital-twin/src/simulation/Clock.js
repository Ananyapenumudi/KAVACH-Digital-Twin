class Clock {

    constructor() {

        this.time = 0;

        this.delta = 0.1;

    }

    reset() {

        this.time = 0;

    }

    tick() {

        this.time += this.delta;

        return this.delta;

    }

}

export default Clock;