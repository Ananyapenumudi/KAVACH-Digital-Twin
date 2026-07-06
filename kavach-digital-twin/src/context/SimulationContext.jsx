import { createContext, useState } from "react";
import SimulationState from "../simulation/SimulationState";

export const SimulationContext = createContext();

export function SimulationProvider({ children }) {

    const [simulation, setSimulation] = useState(
        structuredClone(SimulationState)
    );

    return (

        <SimulationContext.Provider
            value={{
                simulation,
                setSimulation
            }}
        >

            {children}

        </SimulationContext.Provider>

    );

}