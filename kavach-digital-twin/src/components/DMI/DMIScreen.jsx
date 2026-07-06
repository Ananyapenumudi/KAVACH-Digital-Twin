import DMIFrame from "./DMIFrame";

import Speedometer from "./Speedometer/Speedometer";

import Display from "./Display/Display";

import Signal from "./Signal/Signal";

import Status from "./Status/Status";

import "./DMI.css";

export default function DMIScreen(){

    return(

        <DMIFrame>

            <div className="dmi-layout">

                <Speedometer/>

                <Display/>

                <Signal/>

                <Status/>

            </div>

        </DMIFrame>

    );

}