import GridViewIcon from '@mui/icons-material/GridView';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import IconName from "./IconName"
import "./index.css"
export default function Sidebar() {
    return (
        <>

        <div className="sidebar__main">
            <div className="upper__sidebar">
            <div className="profile">
                <AccountCircleIcon sx={{fontSize:"2.5rem" , color:"violet"}}></AccountCircleIcon>
                <p>Welcome Gaurav Mandal</p>
            </div>
            
            <div className="all__sidebarmenus">
                <IconName  name={"DashBoard"} icon={<GridViewIcon />} />
                <IconName  name={"Contacts"} icon={<ContactPageOutlinedIcon  />} />
                <IconName  name={"Campaigns"} icon={<CampaignOutlinedIcon />} />
                <IconName  name={"Integration"} icon={<IntegrationInstructionsOutlinedIcon />} />
                <IconName  name={"Reports"} icon={<LiveTvOutlinedIcon/>} />
                <IconName  name={"Market Place"} icon={<ShoppingCartOutlinedIcon/>} />
                <IconName  name={"SMS Automation"} icon={<SmsOutlinedIcon/>} /> 
            </div>
            </div>
           <div className="lower__sidebar">
           <IconName  name={"Settings"} icon={<SettingsOutlinedIcon/>} /> 
           </div>
          
         
        </div>
        </>
    
    );
    }