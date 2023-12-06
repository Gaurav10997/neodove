import "./index.css";
import InfoIcon from "@mui/icons-material/Info";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Row from "./Row";
import { useState } from "react";

export default function Campaigns() {
  const [pinned, setPinned] = useState([
    "WatsApp Leads",
    "Campaigns on Leads",
    "Soxial Media newtwork  Leads",
    "James Bond Leads Leads",
  ]);
  function deletepinned(name) {
    setPinned(pinned.filter((pin) => pin !== name));
  }
  return (
    <div className="main__campaigns">
      <div className="top">
        <div className="left__campaings">
          <p>Pinned Campaigns</p>
          <InfoIcon sx={{ color: "rgb(210 185 226)" }} />
        </div>
        <div className="reports">
          <div className="box__pinned">
            <p>Campaign reports</p>
          </div>
          <AddCircleIcon sx={{ color: "rgb(102 46 145)" }}></AddCircleIcon>
        </div>
      </div>
      {pinned.map((pin, index) => {
        return <Row key={index} name={pin} deletepinned={deletepinned}></Row>;
      })}
    </div>
  );
}
