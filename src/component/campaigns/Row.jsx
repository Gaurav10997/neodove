import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
export default function Row({name}){
    return(
        <>
            <div className="row">
                <div className="left__row">
                    <div className="first__letter">
                       {name?name[0]:"Z"}
                    </div>
                    <p>{name}</p>
                </div>
                <div className="right">
                    <CloseOutlinedIcon></CloseOutlinedIcon>
             </div>

            </div>  
        </>
    )
}