import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import BasicSelect from "./BasicSelect"
import "./index.css"

export default function Header(){
    return(
        <div className="header">
        <header>
            <h3>Test Lead</h3>
            <div className="icons_menu">
                <BasicSelect/>
                <HeadsetMicIcon/>
                <RocketLaunchIcon/>
                <NotificationsIcon/>
                <MenuIcon/>
            </div>  
        </header>

        </div>

    )
}