class StateMachine {

    constructor(initialState = "SB") {

        this.current = initialState;

    }

    transition(nextState) {

        this.current = nextState;

    }

    getState() {

        return this.current;

    }

}

export default StateMachine;