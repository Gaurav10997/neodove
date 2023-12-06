import "./index.css"
import InfoIcon from '@mui/icons-material/Info';
export default function  CalAnalysis(){
    return(
        <div className="callAnalysis_main">
            <div className="upper">
            <p>Calls Analysis</p>
            <InfoIcon sx={{color:"rgb(210 185 226)"}}/>
            </div>

            <div className="info__rows">
                <p>Attempted</p>
                <p>0</p>
            </div>

            <div className="info__rows">
                <p>Connected</p>
                <p>0</p>
            </div>

            <div className="info__rows">
                <p>Connected Vs Attempted</p>
                <p>0</p>
            </div>
           
        </div>
    )
}