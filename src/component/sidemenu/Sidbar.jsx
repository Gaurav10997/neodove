import GridViewIcon from "@mui/icons-material/GridView";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import IconName from "./IconName";
import "./index.css";
import { useState } from "react";
const iconData = [
  { name: "DashBoard", icon: <GridViewIcon /> },
  { name: "Contacts", icon: <ContactPageOutlinedIcon /> },
  { name: "Campaigns", icon: <CampaignOutlinedIcon /> },
  { name: "Integration", icon: <IntegrationInstructionsOutlinedIcon /> },
  { name: "Reports", icon: <LiveTvOutlinedIcon /> },
  { name: "Market Place", icon: <ShoppingCartOutlinedIcon /> },
  { name: "SMS Automation", icon: <SmsOutlinedIcon /> },
];
export default function Sidebar({ handleChange }) {
  const [active, setActive] = useState("DashBoard");

  const handleChangeState = (value) => {
    setActive(value);
    handleChange(value);
  };

  return (
    <>
      <div className="sidebar__main">
        <div className="upper__sidebar">
          <div className="profile">
            <AccountCircleIcon
              sx={{ fontSize: "2.5rem", color: "violet" }}
            ></AccountCircleIcon>
            <p>Welcome Gaurav Mandal</p>
          </div>

          <div className="all__sidebarmenus">
            {iconData.map((icon, index) =>
              icon.name === active ? (
                <IconName
                  key={index}
                  name={icon.name}
                  icon={icon.icon}
                  state={"highlight"}
                  handleChangeState={handleChangeState}
                />
              ) : (
                <IconName
                  key={index}
                  name={icon.name}
                  icon={icon.icon}
                  handleChangeState={handleChangeState}
                />
              )
            )}
          </div>
        </div>
        <div className="lower__sidebar">
          <IconName name={"Settings"} icon={<SettingsOutlinedIcon />} />
        </div>
      </div>
    </>
  );
}
