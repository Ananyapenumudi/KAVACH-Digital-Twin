import { useContext } from "react";

import { SimulationContext }

from "../context/SimulationContext";

export default function useSimulation(){

    return useContext(

        SimulationContext

    );

}