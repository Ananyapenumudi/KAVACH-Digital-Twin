import "./DisplayArea.css";

import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel";

export default function DisplayArea() {
  return (
    <div className="display-layout">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  );
}