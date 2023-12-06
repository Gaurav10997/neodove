import "./index.css"
export default function LeadBox({boxColor,status,noOfCases}){
    return (
    <div className="lead__box" style={{backgroundColor:boxColor}} >
        <div className="nos">
            <h1 className="noOfCases">{noOfCases}</h1>
        </div>
        <p className="status">{status}</p>
    </div>
    )
}