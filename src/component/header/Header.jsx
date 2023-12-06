import "./index.css";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import BasicSelect from "./BasicSelect";

import TemproryDrawer from "./TemproryDrawer";

export default function Header() {
  return (
    <div className="header">
      <header>
        <h3>Test Lead</h3>
        <div className="icons_menu">
          <BasicSelect />
          <HeadsetMicOutlinedIcon className="icon_items" />
          <RocketLaunchOutlinedIcon className="icon_items" />
          <NotificationsNoneOutlinedIcon className="icon_items" />
          <TemproryDrawer />
        </div>
      </header>
    </div>
  );
}
