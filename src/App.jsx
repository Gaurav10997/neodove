import "./App.css";
import Header from "./component/header/Header";
import Sidebar from "./component/sidemenu/Sidbar";
import Campaigns from "./component/campaigns/Campaigns";
import Summary from "./component/summary/Summary";
import CustomButton from "./component/common/CustomButton";
import LeadAnalysis from "./component/leadAnalysis/LeadAnalysis";
import CalAnalysis from "./component/callAnalysis/CalAnalysis";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { useState } from "react";
function App() {
  const [state, setState] = useState("DashBoard");
  function handleChange(value) {
    console.log(value);
    setState(value);
  }

  return (
    <div className="grid__layout">
      <Header></Header>
      <Sidebar handleChange={handleChange}></Sidebar>

      {state === "DashBoard" ? (
        <>
          <Campaigns></Campaigns>
          <div className="uploads__create">
            <CustomButton
              icon={<CloudUploadOutlinedIcon />}
              color={"rgb(249 219 150)"}
              name={"Upload Leads"}
            ></CustomButton>
            <CustomButton
              icon={<CampaignOutlinedIcon />}
              color={"rgb(210 185 226)"}
              name={"Create Campaign"}
            ></CustomButton>
          </div>
          <Summary></Summary>
          <LeadAnalysis />
          <CalAnalysis />

          <div className="buttons">
            <CustomButton
              icon={<CallOutlinedIcon />}
              color={"rgb(145 249 194)"}
              name={"User Call Report"}
            ></CustomButton>
            <CustomButton
              icon={<PersonOutlineOutlinedIcon />}
              color={"rgb(253 149 151)"}
              name={"User Login Report"}
            ></CustomButton>
            <CustomButton
              icon={<ManageAccountsOutlinedIcon />}
              color={"rgb(152 220 112)"}
              name={"Manage Users"}
            ></CustomButton>
          </div>
        </>
      ) : (
        <h1>{state} Page will Be Available Soon</h1>
      )}
    </div>
  );
}

export default App;
