import TransitionRules from "../rules/TransitionRules";

class ModeEngine {

    initialize() {}

    update(state) {

        const current = state.train.mode;

        for (const rule of TransitionRules) {

            const validSource =

                rule.from === "*" ||

                rule.from === current;

            if (

                validSource &&

                rule.condition(state)

            ) {

                state.train.mode = rule.to;

                break;

            }

        }

    }

    reset() {}

}

export default ModeEngine;