import "./index.css"

import { Pie } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
const categoryStats=[{
    _id:"Facebook",
    count:"10"
},{
    _id:"Instagram",
    count:"20"  
},
{_id:"Watsapp",
count:"50" }
 
]
export default function Summary(){
    return(
    <div className="main__summary">
        <div className="pie__chart">
        <Pie
            data={{
            // eslint-disable-next-line react/prop-types
            labels: categoryStats.map((el) => el._id),
            datasets: [
                {
                label: "No of sold Items in This Month ",
                // eslint-disable-next-line react/prop-types
                data: categoryStats.map((el) => el.count),
                backgroundColor: [
                    "#607D8B", // Green
                    "#2196F3", // Blue
                    "rgb(118 58 187)", // Yellow
                    "#FF5722", // Orange
                    "#9C27B0", // Purple
                    "#E91E63", // Pink
                    "#795548", // Brown
                    "#607D8B" // Gray
                    // Add more colors as needed
                ]
                }
            ]
            }}
        />  
        </div>
   
    </div>
    )
}