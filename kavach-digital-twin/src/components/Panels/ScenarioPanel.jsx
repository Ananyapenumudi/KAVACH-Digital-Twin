import useSimulation from "../../hooks/useSimulation";

import controller

from "../../engines/SimulationController";

import "./scenario.css";

export default function ScenarioPanel(){

    const {

        simulation,

        setSimulation

    } = useSimulation();

    function updateTrain(field,value){

        setSimulation(prev=>({

            ...prev,

            train:{

                ...prev.train,

                [field]:value

            }

        }));

    }

    function startSimulation(){

        const newState=

            structuredClone(simulation);

        controller.initialize(newState);

        controller.start();

        controller.tick(newState);

        setSimulation(newState);

    }

    return(

        <div className="scenario-panel">

            <h2>

                KAVACH Scenario

            </h2>

            <label>

                Speed

                <input

                    type="number"

                    value={simulation.train.speed}

                    onChange={e=>

                        updateTrain(

                            "speed",

                            Number(e.target.value)

                        )

                    }

                />

            </label>

            <button

                onClick={startSimulation}

            >

                Run Simulation

            </button>

        </div>

    );

}