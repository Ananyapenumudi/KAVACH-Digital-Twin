class Time {

    constructor() {

        this.start = Date.now();

    }

    now() {

        return Date.now() - this.start;

    }

}

export default Time;