import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./index.css"

export default function CustomButton({icon,color,name}){
    return(
        <div className="custom__button">
            <div className="custome__button__left">
             <div style={{padding:".5rem" , borderRadius:"70%" , backgroundColor:color}}>
                {icon}
             </div>
            <p>{name}</p>
            </div>
            <KeyboardArrowRightIcon />

        </div>
    )
}