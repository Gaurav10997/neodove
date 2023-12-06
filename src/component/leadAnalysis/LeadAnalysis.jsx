import './index.css'
import InfoIcon from '@mui/icons-material/Info';
import LeadBox from "./LeadBox"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// dummy data for now ;
const LeadData = [
    {
        color:"rgb(250 250 250)",
        name:"Open",
        noOfCases:"136737"
    },
    {
        color:"rgb(210 185 226)",
        name:"In-Process",
        noOfCases:"8819"
    },
    {
        color:"rgb(221 237 226)",
        name:"converted",
        noOfCases:"116"
    },
    {
        color:"rgb(254 210 210)",
        name:"Lost",
        noOfCases:"666"


    }
]

export default function  LeadAnalysis(){
    return(
        <div className="leadAnalysis_main">
            <div className="upper">
            <p>Lead Analysis</p>
            <InfoIcon sx={{color:"rgb(210 185 226)"}}/>
            </div>

            <div className="leadboxes">
            {LeadData.map((lead,index)=>{
                return(
                    <LeadBox key={index} boxColor={lead.color}  noOfCases={lead.noOfCases} status={lead.name} />
                )
            })}
            </div>
           
        </div>
    )
}