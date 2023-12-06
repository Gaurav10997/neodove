import "./index.css"
import InfoIcon from '@mui/icons-material/Info';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Row from "./Row"
export default function Campaigns(){
    return(
        <div className="main__campaigns">
            <div className="top">
                <div className="left__campaings">
                    <p>Pinned Campaigns</p>
                    <InfoIcon sx={{color:"rgb(210 185 226)"}}/>
                </div>
                <div className="reports">
                <div className="box__pinned">
                    <p>Campaign reports</p>
                    </div>
                    <AddCircleIcon sx={{color:"rgb(102 46 145)"}}></AddCircleIcon>
                </div>
            </div>
            <Row name={"WatsApp Leads"}></Row>
            <Row  name={"Campaigns on Leads"} ></Row>
            <Row name={"Soxial Media newtwork  Leads"}></Row>
            <Row name={"James Bond Leads Leads"}></Row>
        </div>
    )
}